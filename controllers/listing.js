const Listing=require("../models/listing");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');

// Created on first use, so the app (and its tests) can start without MAP_TOKEN.
let geocodingClient;
function geocoder(){
    if(!geocodingClient){
        geocodingClient=mbxGeocoding({accessToken:process.env.MAP_TOKEN});
    }
    return geocodingClient;
}

module.exports.index=async (req,res)=>{
    
    const allListings=await Listing.find({});
    res.render("listings/index.ejs",{allListings});
};

module.exports.renderNewForm=(req,res)=>{
    res.render("listings/new.ejs");
};

module.exports.showListing=async (req,res)=>{
    let {id}=req.params;
    let listing=await Listing.findById(id)
    .populate({
        path:"reviews",
        populate:{
            path:"author",
    },
    })
    .populate("owner");
    if(!listing) {
        req.flash("error","Listing not found");
        return res.redirect("/listings");
    }
    res.render("listings/show.ejs",{listing});
}

module.exports.createListing=async(req,res,next)=>{
    if(!req.file){
        req.flash("error","Please upload an image");
        return res.redirect("/listings/new");
    }
    let response=await geocoder().forwardGeocode({
        query: req.body.listing.location,
        limit: 1
      })
        .send();
    if(!response.body.features.length){
        req.flash("error","Could not find that location on the map");
        return res.redirect("/listings/new");
    }

    let url=req.file.path;
    let filename=req.file.filename;

    const newlisting=new Listing(req.body.listing);
    newlisting.image={url,filename};
    newlisting.owner=req.user._id;
    newlisting.geometry=response.body.features[0].geometry;
    
    await newlisting.save();

    req.flash("success","New Listing Created!");
    res.redirect(`/listings`);
}

module.exports.renderEditForm=async (req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id);
    if(!listing) {
        req.flash("error","Listing not found");
        return res.redirect("/listings");
    }
    let originalImageUrl=listing.image.url;
    
    if (originalImageUrl.includes("/upload")) {
        originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");
    }
    res.render("listings/edit.ejs",{listing,originalImageUrl});

}

module.exports.updateListing=async(req,res)=>{
    let {id}=req.params;
    
    
    const listing=await Listing.findByIdAndUpdate(id,{...req.body.listing});
    if(typeof req.file!=="undefined"){
        let url=req.file.path;
        let filename=req.file.filename;
        listing.image={url,filename};
        await listing.save();

    }
    
    
    req.flash("success","Listing Updated")
    res.redirect(`/listings/${id}`);
}

module.exports.destroyListing=async(req,res)=>{
    let {id}=req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success"," Listing Deleted!");
    res.redirect("/listings");
}