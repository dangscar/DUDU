const products = [
    {
        id: 1,
        name: "Chó Shiba",
        price: 131000,
        image: "../images/cho-shiba.png",
        description: "Chó Shiba đáng yêu, phù hợp với mọi lứa tuổi.",
        category: "Thú cưng",
        availability: "Còn hàng"
    },
    {
        id: 2,
        name: "Gấu Miniso",
        price: 250000,
        image: "../images/gau-miniso.jpg",
        description: "Gấu bông Miniso mềm mại, dễ thương.",
        category: "Gấu bông",
        availability: "Hết hàng"
    },
    {
        id: 3,
        name: "Thỏ Animo",
        price: 122000,
        image: "../images/tho-animo.png",
        description: "Thỏ bông Animo đáng yêu và thân thiện.",
        category: "Thú nhồi bông",
        availability: "Còn hàng"
    },
    {
        id: 4,
        name: "Mèo DuDu",
        price: 249000,
        image: "../images/meo-dudu.png",
        description: "Mèo DuDu độc đáo, dành cho người yêu thú bông.",
        category: "Thú nhồi bông",
        availability: "Còn hàng"
    },
    {
        id: 5,
        name: "Vịt cạp cạp",
        price: 209000,
        image: "../images/vit-capcap.png",
        description: "Vịt cạp cạp đáng yêu, luôn cạp cạp mọi thứ.",
        category: "Thú nhồi bông",
        availability: "Còn hàng"
    },
    {
        id: 6,
        name: "Capybara",
        price: 201000,
        image: "../images/capybara.png",
        description: "Capybara đáng yêu, rất phù hợp làm quà tặng.",
        category: "Thú nhồi bông",
        availability: "Còn hàng"
    },
    {
        id: 7,
        name: "Sanrio Cinnamoroll",
        price: 108000,
        image: "../images/sanrio-cinnamoroll.jpeg",
        description: "Sanrio Cinnamoroll trắng mềm mại, thân thiện với trẻ em.",
        category: "Gấu bông",
        availability: "Còn hàng"
    },
    {
        id: 8,
        name: "Mèo hoàng thượng",
        price: 365000,
        image: "../images/meo-hoang-thuong.jpg",
        description: "Mèo hoàng thượng siêu mềm, mang lại sự dễ chịu khi ôm.",
        category: "Thú nhồi bông",
        availability: "Hết hàng"
    },
    {
        id: 9,
        name: "Cừu Ragdoll",
        price: 299000,
        image: "../images/cuu-ragdoll.png",
        description: "Cừu Ragdoll mạnh mẽ nhưng rất dễ thương.",
        category: "Thú nhồi bông",
        availability: "Còn hàng"
    },
    {
        id: 10,
        name: "Heo sữa",
        price: 189000,
        image: "../images/heo-sua.png",
        description: "Thích uống sữa.",
        category: "Thú cưng",
        availability: "Còn hàng"
    },
    {
        id: 11,
        name: "Kuromi tím",
        price: 245000,
        image: "../images/kuromi-tim.png",
        description: "Kuromi tím bông lớn, mềm mại và êm ái.",
        category: "Thú nhồi bông",
        availability: "Hết hàng"
    },
    {
        id: 12,
        name: "Lena mặc áo cầu vồng",
        price: 179000,
        image: "../images/lena-cau-vong.jpeg",
        description: "Lena mặc áo cầu vồng với đôi tai ngắn và vẻ ngoài đáng yêu.",
        category: "Thú nhồi bông",
        availability: "Còn hàng"
    },
    {
        id: 13,
        name: "Kuriozud Cánh Cụt",
        price: 215000,
        image: "../images/kuriozud-canh-cut.png",
        description: "Kuriozud Cánh Cụt dễ thương, là người bạn đồng hành tuyệt vời.",
        category: "Thú nhồi bông",
        availability: "Còn hàng"
    },
    {
        id: 14,
        name: "Kuriozud Bunny Boss",
        price: 275000,
        image: "../images/kuriozud-bunny-boss.png",
        description: "Kuriozud Bunny Boss với vẻ ngoài tinh nghịch và lém lĩnh.",
        category: "Thú nhồi bông",
        availability: "Còn hàng"
    },
    {
        id: 15,
        name: "Mèo con dễ thương",
        price: 150000,
        image: "../images/meo-dudu.png",
        description: "Mèo con dễ thương, đáng yêu và rất dễ nuôi.",
        category: "Thú nhồi bông",
        availability: "Còn hàng"
    },
    {
        id: 16,
        name: "Chó Pug",
        price: 190000,
        image: "../images/cho-shiba.png",
        description: "Chó Pug ngộ nghĩnh, thích hợp làm bạn đồng hành.",
        category: "Thú cưng",
        availability: "Còn hàng"
    },
    {
        id: 17,
        name: "Gấu Teddy",
        price: 300000,
        image: "../images/gau-miniso.jpg",
        description: "Gấu Teddy bông lớn, rất thích hợp làm quà tặng.",
        category: "Gấu bông",
        availability: "Còn hàng"
    },
    {
        id: 18,
        name: "Thỏ trắng dễ thương",
        price: 120000,
        image: "../images/tho-animo.png",
        description: "Thỏ trắng bông mềm mại, rất dễ thương.",
        category: "Thú nhồi bông",
        availability: "Còn hàng"
    },
    {
        id: 19,
        name: "Mèo vằn",
        price: 250000,
        image: "../images/meo-dudu.png",
        description: "Mèo vằn với bộ lông vằn độc đáo.",
        category: "Thú nhồi bông",
        availability: "Còn hàng"
    },
    {
        id: 20,
        name: "Vịt vàng",
        price: 220000,
        image: "../images/vit-capcap.png",
        description: "Vịt vàng ngộ nghĩnh, đáng yêu.",
        category: "Thú nhồi bông",
        availability: "Còn hàng"
    },
    {
        id: 21,
        name: "Gấu bông trắng",
        price: 240000,
        image: "../images/gau-miniso.jpg",
        description: "Gấu bông trắng lớn, êm ái.",
        category: "Gấu bông",
        availability: "Còn hàng"
    },
    {
        id: 22,
        name: "Chó Labrador",
        price: 200000,
        image: "../images/cho-shiba.png",
        description: "Chó Labrador hiền lành, rất thân thiện.",
        category: "Thú cưng",
        availability: "Còn hàng"
    },
    {
        id: 23,
        name: "Mèo Scottish",
        price: 270000,
        image: "../images/meo-dudu.png",
        description: "Mèo Scottish với bộ lông dày và đáng yêu.",
        category: "Thú nhồi bông",
        availability: "Còn hàng"
    },
    {
        id: 24,
        name: "Gấu bông mềm",
        price: 260000,
        image: "../images/gau-miniso.jpg",
        description: "Gấu bông mềm mại, rất dễ ôm.",
        category: "Gấu bông",
        availability: "Còn hàng"
    },
    {
        id: 25,
        name: "Mèo xám",
        price: 180000,
        image: "../images/meo-dudu.png",
        description: "Mèo xám với bộ lông mềm mại và đáng yêu.",
        category: "Thú nhồi bông",
        availability: "Còn hàng"
    },
    {
        id: 26,
        name: "Thỏ bông cao cấp",
        price: 280000,
        image: "../images/tho-animo.png",
        description: "Thỏ bông cao cấp, rất sang trọng.",
        category: "Thú nhồi bông",
        availability: "Còn hàng"
    },
    {
        id: 27,
        name: "Chó Golden",
        price: 210000,
        image: "../images/cho-shiba.png",
        description: "Chó Golden thân thiện, thích hợp cho gia đình.",
        category: "Thú cưng",
        availability: "Còn hàng"
    },
    {
        id: 28,
        name: "Gấu Panda",
        price: 350000,
        image: "../images/gau-miniso.jpg",
        description: "Gấu Panda dễ thương, thích hợp làm quà tặng.",
        category: "Gấu bông",
        availability: "Còn hàng"
    },
    {
        id: 29,
        name: "Vịt siêu dễ thương",
        price: 170000,
        image: "../images/vit-capcap.png",
        description: "Vịt siêu dễ thương với nụ cười tươi.",
        category: "Thú nhồi bông",
        availability: "Còn hàng"
    },
    {
        id: 30,
        name: "Thỏ nhồi bông",
        price: 240000,
        image: "../images/tho-animo.png",
        description: "Thỏ nhồi bông chất lượng cao, rất mềm mại.",
        category: "Thú nhồi bông",
        availability: "Còn hàng"
    },
    {
        id: 31,
        name: "Chó Poodle",
        price: 220000,
        image: "../images/cho-shiba.png",
        description: "Chó Poodle thông minh và thân thiện.",
        category: "Thú cưng",
        availability: "Còn hàng"
    },
    {
        id: 32,
        name: "Gấu Kawaii",
        price: 290000,
        image: "../images/gau-miniso.jpg",
        description: "Gấu Kawaii với màu sắc tươi sáng.",
        category: "Gấu bông",
        availability: "Còn hàng"
    },
    {
        id: 33,
        name: "Mèo Munchkin",
        price: 230000,
        image: "../images/meo-dudu.png",
        description: "Mèo Munchkin với chân ngắn đáng yêu.",
        category: "Thú nhồi bông",
        availability: "Còn hàng"
    },
    {
        id: 34,
        name: "Chó Bichon",
        price: 200000,
        image: "../images/cho-shiba.png",
        description: "Chó Bichon nhỏ nhắn và rất đáng yêu.",
        category: "Thú cưng",
        availability: "Còn hàng"
    },
    {
        id: 35,
        name: "Gấu Gumi",
        price: 330000,
        image: "../images/gau-miniso.jpg",
        description: "Gấu Gumi với thiết kế độc đáo.",
        category: "Gấu bông",
        availability: "Còn hàng"
    },
    {
        id: 36,
        name: "Mèo Ba Tư",
        price: 300000,
        image: "../images/meo-dudu.png",
        description: "Mèo Ba Tư sang trọng và kiêu sa.",
        category: "Thú nhồi bông",
        availability: "Còn hàng"
    },
    {
        id: 37,
        name: "Thỏ cỏ",
        price: 150000,
        image: "../images/tho-animo.png",
        description: "Thỏ cỏ dễ thương, thích hợp cho trẻ em.",
        category: "Thú nhồi bông",
        availability: "Còn hàng"
    },
    {
        id: 38,
        name: "Gấu Gấu Bông",
        price: 350000,
        image: "../images/gau-miniso.jpg",
        description: "Gấu Gấu Bông lớn, êm ái và thoải mái.",
        category: "Gấu bông",
        availability: "Còn hàng"
    },
    {
        id: 39,
        name: "Chó Chihuahua",
        price: 140000,
        image: "../images/cho-shiba.png",
        description: "Chó Chihuahua nhỏ nhắn và rất năng động.",
        category: "Thú cưng",
        availability: "Còn hàng"
    },
    {
        id: 40,
        name: "Mèo lông dài",
        price: 180000,
        image: "../images/meo-dudu.png",
        description: "Mèo lông dài, rất thích hợp để ôm.",
        category: "Thú nhồi bông",
        availability: "Còn hàng"
    },
    {
        id: 41,
        name: "Vịt con",
        price: 170000,
        image: "../images/vit-capcap.png",
        description: "Vịt con dễ thương, rất vui vẻ.",
        category: "Thú nhồi bông",
        availability: "Còn hàng"
    },
    {
        id: 42,
        name: "Gấu bông nhồi",
        price: 280000,
        image: "../images/gau-miniso.jpg",
        description: "Gấu bông nhồi cao cấp, rất bền.",
        category: "Gấu bông",
        availability: "Còn hàng"
    },
    {
        id: 43,
        name: "Thỏ bunny",
        price: 220000,
        image: "../images/tho-animo.png",
        description: "Thỏ bunny với thiết kế dễ thương.",
        category: "Thú nhồi bông",
        availability: "Còn hàng"
    },
    {
        id: 44,
        name: "Chó Boston",
        price: 190000,
        image: "../images/cho-shiba.png",
        description: "Chó Boston đáng yêu, rất thân thiện.",
        category: "Thú cưng",
        availability: "Còn hàng"
    },
    {
        id: 45,
        name: "Mèo Bengal",
        price: 290000,
        image: "../images/meo-dudu.png",
        description: "Mèo Bengal với bộ lông đẹp và đặc biệt.",
        category: "Thú nhồi bông",
        availability: "Còn hàng"
    },
    {
        id: 46,
        name: "Gấu bông cao cấp",
        price: 350000,
        image: "../images/gau-miniso.jpg",
        description: "Gấu bông cao cấp, sang trọng và đẹp.",
        category: "Gấu bông",
        availability: "Còn hàng"
    },
    {
        id: 47,
        name: "Thỏ lông xù",
        price: 230000,
        image: "../images/tho-animo.png",
        description: "Thỏ lông xù dễ thương, phù hợp cho mọi lứa tuổi.",
        category: "Thú nhồi bông",
        availability: "Còn hàng"
    },
    {
        id: 48,
        name: "Chó Nhật Bản",
        price: 160000,
        image: "../images/cho-shiba.png",
        description: "Chó Nhật Bản trung thành và đáng yêu.",
        category: "Thú cưng",
        availability: "Còn hàng"
    },
    {
        id: 49,
        name: "Gấu bông dễ thương",
        price: 300000,
        image: "../images/gau-miniso.jpg",
        description: "Gấu bông dễ thương với nhiều màu sắc.",
        category: "Gấu bông",
        availability: "Còn hàng"
    },
    {
        id: 50,
        name: "Mèo thái",
        price: 220000,
        image: "../images/meo-dudu.png",
        description: "Mèo thái với bộ lông mềm mại.",
        category: "Thú nhồi bông",
        availability: "Còn hàng"
    },
    {
        id: 51,
        name: "Chó Bắc Kinh",
        price: 250000,
        image: "../images/cho-shiba.png",
        description: "Chó Bắc Kinh nhỏ nhắn, rất đáng yêu.",
        category: "Thú cưng",
        availability: "Còn hàng"
    },
    {
        id: 52,
        name: "Gấu bông yêu thích",
        price: 310000,
        image: "../images/gau-miniso.jpg",
        description: "Gấu bông yêu thích của mọi người.",
        category: "Gấu bông",
        availability: "Còn hàng"
    },
    {
        id: 53,
        name: "Mèo sứ trắng",
        price: 270000,
        image: "../images/meo-dudu.png",
        description: "Mèo sứ trắng đẹp, phù hợp với mọi không gian.",
        category: "Thú nhồi bông",
        availability: "Còn hàng"
    },
    {
        id: 54,
        name: "Thỏ ngọc",
        price: 230000,
        image: "../images/tho-animo.png",
        description: "Thỏ ngọc với thiết kế tinh tế.",
        category: "Thú nhồi bông",
        availability: "Còn hàng"
    },
    {
        id: 55,
        name: "Chó Corgi",
        price: 190000,
        image: "../images/cho-shiba.png",
        description: "Chó Corgi vui vẻ, thích chạy nhảy.",
        category: "Thú cưng",
        availability: "Còn hàng"
    },
    {
        id: 56,
        name: "Gấu bông cute",
        price: 280000,
        image: "../images/gau-miniso.jpg",
        description: "Gấu bông cute cho trẻ em.",
        category: "Gấu bông",
        availability: "Còn hàng"
    },
    {
        id: 57,
        name: "Mèo lông ngắn",
        price: 170000,
        image: "../images/meo-dudu.png",
        description: "Mèo lông ngắn, dễ thương và thân thiện.",
        category: "Thú nhồi bông",
        availability: "Còn hàng"
    },
    {
        id: 58,
        name: "Thỏ dễ thương",
        price: 160000,
        image: "../images/tho-animo.png",
        description: "Thỏ dễ thương với thiết kế đẹp mắt.",
        category: "Thú nhồi bông",
        availability: "Còn hàng"
    },
    {
        id: 59,
        name: "Gấu bông cổ điển",
        price: 320000,
        image: "../images/gau-miniso.jpg",
        description: "Gấu bông cổ điển, mang lại cảm giác hoài niệm.",
        category: "Gấu bông",
        availability: "Còn hàng"
    },
    {
        id: 60,
        name: "Chó Chihuahua bông",
        price: 160000,
        image: "../images/cho-shiba.png",
        description: "Chó Chihuahua bông, rất mềm mại.",
        category: "Thú cưng",
        availability: "Còn hàng"
    },
    {
        id: 61,
        name: "Mèo Sphinx",
        price: 280000,
        image: "../images/meo-dudu.png",
        description: "Mèo Sphinx với vẻ ngoài độc đáo.",
        category: "Thú nhồi bông",
        availability: "Còn hàng"
    },
    {
        id: 62,
        name: "Gấu Bear lớn",
        price: 450000,
        image: "../images/gau-miniso.jpg",
        description: "Gấu Bear lớn, êm ái và thoải mái.",
        category: "Gấu bông",
        availability: "Còn hàng"
    },
    {
        id: 63,
        name: "Chó Samoyed",
        price: 230000,
        image: "../images/cho-shiba.png",
        description: "Chó Samoyed đẹp và thông minh.",
        category: "Thú cưng",
        availability: "Còn hàng"
    },
    {
        id: 64,
        name: "Mèo Scottish",
        price: 250000,
        image: "../images/meo-dudu.png",
        description: "Mèo Scottish với bộ lông dày và mềm.",
        category: "Thú nhồi bông",
        availability: "Còn hàng"
    },
    {
        id: 65,
        name: "Gấu Bông Nhỏ",
        price: 150000,
        image: "../images/gau-miniso.jpg",
        description: "Gấu bông nhỏ nhắn, dễ mang theo.",
        category: "Gấu bông",
        availability: "Còn hàng"
    },
    {
        id: 66,
        name: "Chó Basenji",
        price: 270000,
        image: "../images/cho-shiba.png",
        description: "Chó Basenji thông minh, dễ chăm sóc.",
        category: "Thú cưng",
        availability: "Còn hàng"
    },
    {
        id: 67,
        name: "Mèo Abyssinian",
        price: 240000,
        image: "../images/meo-dudu.png",
        description: "Mèo Abyssinian nhanh nhẹn và đáng yêu.",
        category: "Thú nhồi bông",
        availability: "Còn hàng"
    },
    {
        id: 68,
        name: "Gấu Bông Kawaii",
        price: 260000,
        image: "../images/gau-miniso.jpg",
        description: "Gấu Bông Kawaii với thiết kế dễ thương.",
        category: "Gấu bông",
        availability: "Còn hàng"
    },
    {
        id: 69,
        name: "Thỏ tội nghiệp",
        price: 190000,
        image: "../images/tho-animo.png",
        description: "Thỏ tội nghiệp với đôi mắt to.",
        category: "Thú nhồi bông",
        availability: "Còn hàng"
    },
    {
        id: 70,
        name: "Chó Terrier",
        price: 210000,
        image: "../images/cho-shiba.png",
        description: "Chó Terrier năng động và thông minh.",
        category: "Thú cưng",
        availability: "Còn hàng"
    },
    {
        id: 71,
        name: "Mèo Burmese",
        price: 230000,
        image: "../images/meo-dudu.png",
        description: "Mèo Burmese với bộ lông bóng mượt.",
        category: "Thú nhồi bông",
        availability: "Còn hàng"
    },
    {
        id: 72,
        name: "Gấu Bông Ngủ",
        price: 300000,
        image: "../images/gau-miniso.jpg",
        description: "Gấu Bông Ngủ cho giấc ngủ ngon.",
        category: "Gấu bông",
        availability: "Còn hàng"
    },
    {
        id: 73,
        name: "Thỏ dễ thương 2",
        price: 180000,
        image: "../images/tho-animo.png",
        description: "Thỏ dễ thương 2 với thiết kế mới.",
        category: "Thú nhồi bông",
        availability: "Còn hàng"
    },
    {
        id: 74,
        name: "Chó Phú Quốc",
        price: 200000,
        image: "../images/cho-shiba.png",
        description: "Chó Phú Quốc trung thành và dũng mãnh.",
        category: "Thú cưng",
        availability: "Còn hàng"
    },
    {
        id: 75,
        name: "Mèo Domesticated",
        price: 150000,
        image: "../images/meo-dudu.png",
        description: "Mèo Domesticated dễ thương, thích ở bên bạn.",
        category: "Thú nhồi bông",
        availability: "Còn hàng"
    },
    {
        id: 76,
        name: "Gấu Bông Tươi Sáng",
        price: 350000,
        image: "../images/gau-miniso.jpg",
        description: "Gấu Bông Tươi Sáng với nhiều màu sắc.",
        category: "Gấu bông",
        availability: "Còn hàng"
    },
    {
        id: 77,
        name: "Chó Saint Bernard",
        price: 280000,
        image: "../images/cho-shiba.png",
        description: "Chó Saint Bernard lớn và mạnh mẽ.",
        category: "Thú cưng",
        availability: "Còn hàng"
    },
    {
        id: 78,
        name: "Mèo Persian",
        price: 250000,
        image: "../images/meo-dudu.png",
        description: "Mèo Persian lông dài, rất quý phái.",
        category: "Thú nhồi bông",
        availability: "Còn hàng"
    },
    {
        id: 79,
        name: "Gấu Bông Ngủ Ngon",
        price: 320000,
        image: "../images/gau-miniso.jpg",
        description: "Gấu Bông Ngủ Ngon cho giấc ngủ ngon.",
        category: "Gấu bông",
        availability: "Còn hàng"
    },
    {
        id: 80,
        name: "Thỏ Bông Tươi",
        price: 160000,
        image: "../images/tho-animo.png",
        description: "Thỏ Bông Tươi với màu sắc rực rỡ.",
        category: "Thú nhồi bông",
        availability: "Còn hàng"
    },
    {
        id: 81,
        name: "Chó Phốc Sóc",
        price: 220000,
        image: "../images/cho-shiba.png",
        description: "Chó Phốc Sóc nhỏ nhắn và dễ thương.",
        category: "Thú cưng",
        availability: "Còn hàng"
    },
    {
        id: 82,
        name: "Gấu Bông Quý Tộc",
        price: 380000,
        image: "../images/gau-miniso.jpg",
        description: "Gấu Bông Quý Tộc với thiết kế sang trọng.",
        category: "Gấu bông",
        availability: "Còn hàng"
    },
    {
        id: 83,
        name: "Mèo Exotic Shorthair",
        price: 240000,
        image: "../images/meo-dudu.png",
        description: "Mèo Exotic Shorthair với vẻ đẹp lạ.",
        category: "Thú nhồi bông",
        availability: "Còn hàng"
    },
    {
        id: 84,
        name: "Thỏ Siêu Cute",
        price: 210000,
        image: "../images/tho-animo.png",
        description: "Thỏ Siêu Cute với thiết kế độc đáo.",
        category: "Thú nhồi bông",
        availability: "Còn hàng"
    },
    {
        id: 85,
        name: "Chó Chihuahua Mini",
        price: 190000,
        image: "../images/cho-shiba.png",
        description: "Chó Chihuahua Mini dễ thương.",
        category: "Thú cưng",
        availability: "Còn hàng"
    },
    {
        id: 86,
        name: "Gấu Bông Dễ Thương",
        price: 300000,
        image: "../images/gau-miniso.jpg",
        description: "Gấu Bông Dễ Thương cho trẻ em.",
        category: "Gấu bông",
        availability: "Còn hàng"
    },
    {
        id: 87,
        name: "Mèo Thai 2",
        price: 180000,
        image: "../images/meo-dudu.png",
        description: "Mèo Thai 2 với bộ lông mềm mại.",
        category: "Thú nhồi bông",
        availability: "Còn hàng"
    },
    {
        id: 88,
        name: "Thỏ Bông Ngọc",
        price: 250000,
        image: "../images/tho-animo.png",
        description: "Thỏ Bông Ngọc dễ thương.",
        category: "Thú nhồi bông",
        availability: "Còn hàng"
    },
    {
        id: 89,
        name: "Chó Samoyed Bông",
        price: 240000,
        image: "../images/cho-shiba.png",
        description: "Chó Samoyed Bông lớn và đáng yêu.",
        category: "Thú cưng",
        availability: "Còn hàng"
    },
     {
        id: 90,
        name: "Gấu Bông Mini",
        price: 120000,
        image: "../images/gau-miniso.jpg",
        description: "Gấu Bông Mini dễ thương, nhỏ gọn.",
        category: "Gấu bông",
        availability: "Còn hàng"
    },
    {
        id: 91,
        name: "Mèo Thai 3",
        price: 200000,
        image: "../images/meo-dudu.png",
        description: "Mèo Thai 3 với bộ lông đẹp.",
        category: "Thú nhồi bông",
        availability: "Còn hàng"
    },
    {
        id: 92,
        name: "Chó Chó Bông",
        price: 150000,
        image: "../images/cho-shiba.png",
        description: "Chó Bông đáng yêu cho trẻ em.",
        category: "Thú cưng",
        availability: "Còn hàng"
    },
    {
        id: 93,
        name: "Gấu Bông Xinh",
        price: 290000,
        image: "../images/gau-miniso.jpg",
        description: "Gấu Bông Xinh cho những ai yêu thích.",
        category: "Gấu bông",
        availability: "Còn hàng"
    },
    {
        id: 94,
        name: "Mèo Munchkin 2",
        price: 220000,
        image: "../images/meo-dudu.png",
        description: "Mèo Munchkin 2 dễ thương.",
        category: "Thú nhồi bông",
        availability: "Còn hàng"
    },
    {
        id: 95,
        name: "Thỏ Ngủ",
        price: 180000,
        image: "../images/tho-animo.png",
        description: "Thỏ Ngủ dễ thương và mềm mại.",
        category: "Thú nhồi bông",
        availability: "Còn hàng"
    },
    {
        id: 96,
        name: "Chó Labrador",
        price: 200000,
        image: "../images/cho-shiba.png",
        description: "Chó Labrador thông minh và thân thiện.",
        category: "Thú cưng",
        availability: "Còn hàng"
    },
    {
        id: 97,
        name: "Gấu Bông Đẹp",
        price: 300000,
        image: "../images/gau-miniso.jpg",
        description: "Gấu Bông Đẹp cho trẻ em.",
        category: "Gấu bông",
        availability: "Còn hàng"
    },
    {
        id: 98,
        name: "Mèo Bông Ngọc",
        price: 260000,
        image: "../images/meo-dudu.png",
        description: "Mèo Bông Ngọc dễ thương và thân thiện.",
        category: "Thú nhồi bông",
        availability: "Còn hàng"
    },
    {
        id: 99,
        name: "Thỏ Lông Xù",
        price: 150000,
        image: "../images/tho-animo.png",
        description: "Thỏ Lông Xù đáng yêu.",
        category: "Thú nhồi bông",
        availability: "Còn hàng"
    },
    {
        id: 100,
        name: "Chó Hảo Hạng",
        price: 300000,
        image: "../images/cho-shiba.png",
        description: "Chó Hảo Hạng với thiết kế sang trọng.",
        category: "Thú cưng",
        availability: "Còn hàng"
    },
];
function getProductById(id) {
    return products.find(product => product.id === id);
}

