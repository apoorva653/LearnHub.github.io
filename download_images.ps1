$imageUrls = @{
    "hero-image.jpg" = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
    "web-dev.jpg" = "https://images.unsplash.com/photo-1587620962725-abab7fe55159"
    "digital-marketing.jpg" = "https://images.unsplash.com/photo-1533750349088-cd871a92f312"
    "data-science.jpg" = "https://images.unsplash.com/photo-1509228468518-180dd4864904"
    "ai-ml.jpg" = "https://images.unsplash.com/photo-1555255707-c07966088b7b"
    "social-media.jpg" = "https://images.unsplash.com/photo-1611926653458-09294b3142bf"
    "cyber-security.jpg" = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
    "mobile-dev.jpg" = "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c"
    "seo.jpg" = "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9"
    "cloud-computing.jpg" = "https://images.unsplash.com/photo-1544197150-b99a580bb7a8"
    "content-marketing.jpg" = "https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
    "blockchain.jpg" = "https://images.unsplash.com/photo-1639762681485-074b7f938ba0"
    "ui-ux.jpg" = "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c"
}

foreach ($image in $imageUrls.GetEnumerator()) {
    $outputFile = "images/$($image.Key)"
    Write-Host "Downloading $($image.Key)..."
    Invoke-WebRequest -Uri $image.Value -OutFile $outputFile
    Write-Host "Downloaded $($image.Key)"
}

Write-Host "All images have been downloaded successfully!" 