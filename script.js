let i = 0
let time = 2000

// Grab the images from HTML source
let images = document.querySelectorAll('.ImgRow img')

// images elements
const rows = document.querySelectorAll('.row')

/*
 * Change the image source over time
 */
function changeImg() {
  // Select the main image to show
  document.slide.src = images[i].src
  
  // loop through the inactive blurry images
  rows.forEach(row => row.classList.remove('active'))
  
  /*
   * Default filters for all thumbnails: grayscale and blur
   */
  const [img0] = document.getElementsByClassName("th00")
  img0.style.filter = "grayscale(100%) blur(1px)"

  const [img1] = document.getElementsByClassName("th01")
  img1.style.filter = "grayscale(100%) blur(1px)"

  const [img2] = document.getElementsByClassName("th02")
  img2.style.filter = "grayscale(100%) blur(1px)"

  const [img3] = document.getElementsByClassName("th03")
  img3.style.filter = "grayscale(100%) blur(1px)"

  /*
   * Only display the active thumbnail in color
	*/
  const [innerDiv] = document.getElementsByClassName("th0" + i)
  innerDiv.style.filter = "brightness(90%)"

  // Notify users of the current image in frame
  rows[i].classList.add('active')
  
  // Index
  if (i < images.length - 1) {
    i++
  } else {
    i = 0
  }

  setTimeout("changeImg()", time)
}

window.onload = changeImg;
