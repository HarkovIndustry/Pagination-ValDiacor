document.addEventListener("DOMContentLoaded", function () {
  const details = [
    {
      place: "Alona Beach",
      imagePath: "images/",
      images: ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"],
      description:
        "Relax on the stunning, kilometer-long white sand beach in Panglao Island, surrounded by crystal-clear waters and lush palm trees. Enjoy the serene ambiance, perfect for sunbathing, swimming, and snorkeling. Experience local cuisine at beachfront restaurants and immerse yourself in the natural beauty of this tropical paradise.",
      buttonDirectory: {
        fee: "Free",
        address: {
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6864.963267105474!2d123.76675494140645!3d9.548103712141632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33abac9f32e574a7%3A0x48e7cb35746858e1!2sAlona%20Beach!5e1!3m2!1sen!2sph!4v1732966307232!5m2!1sen!2sph",
          location: "Panglao Island, Bohol",
        },
        contact: "+63 938 502 8101",
      },
    },
    {
      place: "Baclayon Church",
      imagePath: "images/",
      images: [
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.jpg",
        "6.jpg",
        "7.JPG",
        "8.JPG",
      ],
      description:
        "Dedicated to Our Lady of the Immaculate Conception, this ancient Catholic stone church showcases Bohol's rich history. Marvel at its intricate architecture, which has stood the test of time since the 16th century. The church houses religious artifacts and offers a glimpse into the island's colonial past, making it a must-visit for history enthusiasts and devotees alike.",
      buttonDirectory: {
        fee: "Free",
        address: {
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.6792913652007!2d123.91245119999999!3d9.6228578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa4e3f6a91f0c3%3A0xe2eacd652008b449!2sBaclayon%20Church!5e0!3m2!1sen!2sph!4v1732967127375!5m2!1sen!2sph",
          location: "Main Road, Baclayon, Bohol",
        },
        contact: "+63 938 540 9088",
      },
    },
    {
      place: "Bilar Man-Made Forest",
      imagePath: "images/",
      images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
      description:
        "Stroll through the refreshing, two-kilometer stretch of Mahogany trees that make up the Bilar Man-Made Forest. This lush green canopy provides a cool respite and a captivating visual experience, with towering trees that create a tunnel-like effect. Perfect for nature lovers and photographers, this serene forest is an ideal spot to connect with nature and capture stunning photos.",
      buttonDirectory: {
        fee: "Free",
        address: {
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.1966496325167!2d124.07847400000001!3d9.6642323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa4158fa167357%3A0xef93d9624ddbd561!2sBilar%20Man-Made%20Forest!5e0!3m2!1sen!2sph!4v1732967248644!5m2!1sen!2sph",
          location: "Loay Interior Road, Bilar, Bohol",
        },
        contact: "+63 938 540 9088",
      },
    },
    {
      place: "Blood Compact Shrine",
      imagePath: "images/",
      images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
      description:
        "This historic site commemorates the Blood Compact between Sikatuna and Miguel Lopez de Legaspi, symbolizing peace and friendship. The shrine marks a significant event in Philippine history, representing the first international treaty of friendship between Filipinos and Spaniards. Visitors can reflect on the importance of unity and cultural exchange while enjoying scenic views of the surrounding area.",
      buttonDirectory: {
        fee: "Free",
        address: {
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.628466065994!2d123.87874129999999!3d9.6272231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa4dddf6a22e4d%3A0x1c874258d96a6677!2sBlood%20Compact%20Shrine!5e0!3m2!1sen!2sph!4v1732967284017!5m2!1sen!2sph",
          location: "J.P Inting Street, Tagbilaran City, 6300 Bohol",
        },
        contact: "+63 938 411 2014",
      },
    },
    {
      place: "Bohol Bee Farm",
      imagePath: "images/",
      images: ["1.JPG", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
      description:
        "Discover the wonders of beekeeping at Bohol Bee Farm, where you can enjoy scenic surroundings and savor local cuisine. Explore the farm's vibrant gardens, learn about sustainable farming practices, and taste delicious organic products made on-site. This eco-friendly destination offers a unique blend of nature, education, and culinary delights, making it a must-visit spot for a memorable experience.",
      buttonDirectory: {
        fee: "PHP 500 (with Lunch)",
        address: {
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d503581.1718602869!2d123.21714668906247!3d9.5756128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa5300078621fb%3A0xe3f71fa920300a26!2sBohol%20Bee%20Farm%20Hotel!5e0!3m2!1sen!2sph!4v1732967358927!5m2!1sen!2sph",
          location: "Bohol Bee Farm, Dao, Dauis, Panglao Island, Bohol",
        },
        contact: "+63 938 502 2288",
      },
    },
    {
      place: "Chocolate Hills",
      imagePath: "images/",
      images: ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"],
      description:
        "Witness the breathtaking, chocolate-brown hills formed by tidal movements, a natural wonder that captivates visitors. These unique geological formations, numbering over a thousand, transform from lush green to chocolate brown during the dry season. The Chocolate Hills are one of the Philippines' most iconic landscapes, offering panoramic views and unforgettable experiences for nature enthusiasts and photographers.",
      buttonDirectory: {
        fee: "PHP 100 (view deck)",
        address: {
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15724.983370833097!2d124.13967560000002!3d9.8297078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa3da1a65d72f7%3A0xd89c856a3307dd67!2sChocolate%20Hills!5e0!3m2!1sen!2sph!4v1732967393951!5m2!1sen!2sph",
          location: "Carmen, Bohol",
        },
        contact: "+63 938 411 2014",
      },
    },
    {
      place: "Danao Adventure Park",
      imagePath: "images/",
      images: ["1.jpg", "2.jpg", "3.JPG", "4.jpg", "5.jpg"],
      description:
        "Experience extreme adventures like the sky ride, plunge, and river trekking amidst nature at Danao Adventure Park. This thrilling destination offers adrenaline-pumping activities set against the backdrop of Bohol's stunning landscapes. Whether you're seeking a heart-racing plunge or a scenic river trek, the park provides an exhilarating escape for adventure seekers of all kinds.",
      buttonDirectory: {
        fee: "PHP 500 - PHP 2,000",
        address: {
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.7128155743353!2d124.1789637!3d9.957834799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa19485cdba799%3A0xfd87c4405e602f7b!2sDanao%20Adventure%20Park!5e0!3m2!1sen!2sph!4v1732967440041!5m2!1sen!2sph",
          location: "Danao, Bohol",
        },
        contact: "+63 938 510 0055",
      },
    },
    {
      place: "Loboc River",
      imagePath: "images/",
      images: ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"],
      description:
        "Experience a scenic river cruise along the Loboc River, where you can savor lunch at floating restaurants and marvel at stunning views of lush greens. The tranquil journey offers a unique perspective of Bohol's natural beauty, with traditional music and dance performances adding a cultural touch. Enjoy the serene ambiance and breathtaking landscapes as you glide through this picturesque river.",
      buttonDirectory: {
        fee: "PHP 500 - PHP 1,500",
        address: {
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251680.7838996077!2d124.07524484999999!3d9.72260365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa40c60d6fcd0b%3A0x565db0188546a924!2sLoboc%20River!5e0!3m2!1sen!2sph!4v1732967479155!5m2!1sen!2sph",
          location: "Poblacion Sawang, Loboc Bohol",
        },
        contact: "+63 938 537 9141",
      },
    },
    {
      place: "Philippine Tarsier Foundation",
      imagePath: "images/",
      images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
      description:
        "Meet the smallest primates at the Philippine Tarsier Foundation, where you can learn about conservation efforts and support wildlife preservation. This sanctuary provides a safe haven for the endangered tarsiers, offering visitors an educational and immersive experience. By visiting, you contribute to the protection of these unique creatures and help promote biodiversity conservation.",
      buttonDirectory: {
        fee: "PHP 60",
        address: {
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.8858535800437!2d123.9526892!3d9.690782700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa4925ec11288b%3A0xbf9bd933c18ea237!2sPhilippine%20Tarsier%20Sanctuary!5e0!3m2!1sen!2sph!4v1732967515797!5m2!1sen!2sph",
          location: "Philippine Tarsier Foundation Inc., Corella Bohol",
        },
        contact: "+63 938 535 9275",
      },
    },
    {
      place: "Tigbao Hanging Bridge",
      imagePath: "images/",
      images: ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"],
      description:
        'Cross the steel and bamboo Tigbao Hanging Bridge, where you can explore souvenir shops and visit the "buko king" of Bohol. This thrilling attraction offers a unique and slightly adventurous experience as you walk across the swaying bridge. Enjoy the local delicacies and crafts available at the nearby shops, making it a memorable part of your Bohol journey.',
      buttonDirectory: {
        fee: "Free",
        address: {
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.173233358811!2d124.03624099678956!3d9.666235200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa45e4546f782f%3A0x46f6b31c76e8e876!2sTigbao%20Bridge!5e0!3m2!1sen!2sph!4v1732967616764!5m2!1sen!2sph",
          location: "Tigbao, Loboc Bohol",
        },
        contact: "+63 938 537 9141",
      },
    },
  ];

  const itemsPerPage = 1; // Adjust this value for more items per page
  let currentPage = 1;

  function renderPagination(totalItems) {
    const paginationList = document.querySelector("#pages");
    if (!paginationList) {
      console.error("Pagination element not found");
      return;
    }

    const totalPages = Math.ceil(totalItems / itemsPerPage);
    paginationList.innerHTML = '<ul class="pagination justify-content-center"></ul>';
    const paginationUl = paginationList.querySelector(".pagination");

    // Handle Previous button
    const prevButton = `<li class="page-item active">
                                <a class="page-link prev active" href="#" aria-label="Previous" data-page="prev">
                                    Previous
                                </a>
                            </li>`;
    paginationUl.insertAdjacentHTML("beforeend", prevButton);

    // Add pagination links
    for (let i = 1; i <= totalPages; i++) {
      const activeClass = i === currentPage ? "active" : "";
      const pageItem = `<li class="page-item ${activeClass} mx-1">
                                <a class="page-link ${activeClass}" href="#" data-page="${i}">${i}</a>
                              </li>`;
      paginationUl.insertAdjacentHTML("beforeend", pageItem);
    }

    // Handle Next button
    const nextButton = `<li class="page-item active">
                                <a class="page-link next active" href="#" aria-label="Next" data-page="next">
                                    Next
                                </a>
                            </li>`;
    paginationUl.insertAdjacentHTML("beforeend", nextButton);

    // Add event listeners
    paginationUl.querySelectorAll(".page-link").forEach((link) => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        const page = this.getAttribute("data-page");
        if (page === "prev") {
          currentPage = currentPage === 1 ? totalPages : currentPage - 1;
        } else if (page === "next") {
          currentPage = currentPage === totalPages ? 1 : currentPage + 1;
        } else {
          currentPage = parseInt(page);
        }
        renderDestinations();
        renderPagination(totalItems);
      });
    });
  }

  function renderDestinations() {
    const container = document.querySelector("#information");
    if (!container) {
      console.error("Information container not found");
      return;
    }

    container.innerHTML = "";

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedItems = details.slice(start, end);

    paginatedItems.forEach((detail) => {
      const images = detail.images
        .map((image) => {
          const source = `${detail.imagePath}${detail.place}/${image}`;
          return `<div class="col-6 col-md-4 col-lg-2 my-2"><img src="${source}" alt="${detail.place}" class="rounded img-thumbnail w-100 img-fluid"></div>`;
        })
        .join("");

      const infoContent = `
                <div class="texts">
                    <h2 class="signature">${detail.place}</h2>
                    <p>${detail.description}</p>
                </div>
                <div class="row images">${images}</div>
                <div class="container">
                    <iframe src="${detail.buttonDirectory.address.map}" style="width: 80%; height: 450px; border: 0;" allowfullscreen="" loading="lazy" class="my-3 border border-light rounded shadow"></iframe>
                </div>
                <div class="container my-3 text-center">
                    <button class="btn btn-primary mx-3 expand-button active">Expand Details</button>
                    <button class="btn btn-primary mx-3 expand-button active" onclick="window.location.href='tel:${detail.buttonDirectory.contact}'">Contact Destination</button>
                </div>
                <div class="container row expand-details text-center p-2" style="display: none;">
                    <div class="col-md-4" id="fee"><strong>FEE</strong><br>${detail.buttonDirectory.fee}<hr></div>
                    <div class="col-md-4" id="address"><strong>ADDRESS</strong><br>${detail.buttonDirectory.address.location}<hr></div>
                    <div class="col-md-4" id="contact"><strong>CONTACT</strong><br>${detail.buttonDirectory.contact}<hr></div>
                </div>`;

      container.insertAdjacentHTML("beforeend", infoContent);

      const expandButton = container.querySelector(".expand-button");
      expandButton.addEventListener("click", function () {
        const expandDetails = container.querySelector(".expand-details");
        expandDetails.style.display =
          expandDetails.style.display === "none" ? "flex" : "none";
      });
    });
  }

  if (
    document.querySelector("#pages") &&
    document.querySelector("#information")
  ) {
    renderPagination(details.length);
    renderDestinations();
  } else {
    console.error(
      "Pagination or Information container not found during initial load"
    );
  }
});
