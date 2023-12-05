let questions = [
    {
        id: 1,
        quest: "Pháp luật chỉ cách ứng xử mà mọi người phải tuân theo trong những trường hợp nhất định, là tính chất nào sau đây của Pháp luật?",
        answers: ["Tính cưỡng chế của Pháp luật", 
        "Tính phổ biến", 
        "Tính khách quan", 
        "Tính tương đối ổn định"],
        correct: 1
    },
    {
        id: 2,
        quest: "Nhà nước xã hội chủ nghĩa Việt Nam ra đời sau:",
        answers: ["Cách mạng tháng 8/1945", "Hoà bình lập lại ở miền Bắc năm 1954", "Hoà bình thống nhất đất nước sau ngày 30/4/1975", "Tất cả đều sai"],
        correct: 0
    },
    {
        id: 3,
        quest: "Pháp luật có vái trò như thế nào đối với công dân ",
        answers: ["Bảo vệ quyền tự do tuyệt đối của công dân", 
                "Bảo vệ quyền và lợi ích hợp pháp của công dân", 
                "Bảo vệ lợi ích của công dân.", 
                "Bảo vệ mọi nhu cầu của công dân"],
        correct: 1
    },
    {
        id: 4,
        quest: "Hiến pháp là văn bản pháp lý có đặc điểm nào sau đây?",
        answers: ["Có hiệu lực cao nhất trong hệ thống văn bản quy phạm pháp luật", 
                "Các văn bản quy phạm pháp luật khác không được trái với hiến pháp", 
                "Chỉ có Quốc hội là cơ quan duy nhất có quyền ban hành và sửa đổi hiến pháp", 
                "Tất cả đều đúng"],
        correct: 3
    },
    {
        id: 5,
        quest: "Đặt dưới sự lãnh đạo của Đảng cộng sản Việt Nam, là một nguyên tắc hoạt động của:",
        answers: ["Mặt trận tổ quốc",
                "Hội đồng nhân dân",
                "Bộ máy nhà nước xã hội chủ nghĩa Việt Nam",
                "Quốc hội và Chính phủ Việt Nam"],
        correct: 2
    },
    {
        id: 6,
        quest: "Nguyên thủ quốc gia của nước CHXHCN Việt Nam là:",
        answers: ["Tổng bí thư",
                "Chủ tịch nước",
                "Chủ tịch quốc hội",
                "Thủ tướng chính phủ"],
        correct: 1
    },
    {
        id: 7,
        quest: "Đặt ra thuế và thu thuế là:",
        answers: ["Chức năng, nhiệm vụ của Chính phủ",
                "Trách nhiệm của ngành thuế",
                "Thẩm quyền của Quốc hội",
                "Một trong những đặc trưng cơ bản của Nhà nước"],
        correct: 3
    },
    {
        id: 8,
        quest: "Đặt ra pháp luật và buộc mọi thành viên trong xã hội phải thực hiện, đó là đặc trưng của:",
        answers: ["Nhà nước chiếm hữu nô lệ",
                "Nhà nước phong kiến và nhà nước tư sản",
                "Nhà nước xã hội chủ nghĩa",
                "Mọi nhà nước"],
        correct: 3
    },
    {
        id: 9,
        quest: "Với tư cách là cơ quan quyền lực nhà nước cao nhất, Quốc hội thực hiện chức năng cơ bản nào sau đây?",
        answers: ["Chức năng lập pháp",
                "Chức năng tư pháp",
                "Chức năng hành pháp",
                "Chức năng xét xử"],
        correct: 0
    },
    {
        id: 10,
        quest: "Nhà nước không tồn tại trong xã hội nào sau đây?",
        answers: ["Xã hội chiếm hữu nô lệ",
                "Xã hội phong kiến",
                "Xã hội Cộng sản nguyên thủy",
                "Tất cả đều đúng"],
        correct: 2
    },
    //
    {
        id: 11,
        quest: "Bản chất giai cấp của Nhà nước thể hiện:",
        answers: ["Nhà nước là một bộ máy trấn áp đặc biệt của giai cấp này đối với giai cấp khác", 
                "Nhà nước là công cụ để bảo vệ an ninh, chính trị, trật tự, an toàn xã hội", 
                "Nhà nước là một bộ máy để trấn áp những người chống đối nhân dân", 
                "Tất cả đều đúng"],
        correct: 0
    },
    {
        id: 12,
        quest: "Bản chất xã hội của Nhà nước thể hiện:",
        answers: ["Nhà nước là công cụ sắc bén nhất để quản lý mọi mặt đời sống xã hội", 
                "Nhà nước là một bộ máy trấn áp đặc biệt trong tay nhà cầm quyền", 
                "Nhà nước là công cụ của đa số nhân dân lao động sử dụng để trấn áp thiểu số giai cấp bóc lột", 
                "Nhà nước là bộ máy nhằm bảo đảm trật tự an toàn xã hội và đảm đương các công việc chung vì sự phát triển của xã hội"],
        correct: 3
    },
    {
        id: 13,
        quest: "Dấu hiệu nào sau đây không phải là đặc trưng cơ bản của Nhà nước?",
        answers: ["Nhà nước phân chia dân cư theo lãnh thổ", 
                "Nhà nước có chủ quyền Quốc gia", 
                "Nhà nước điều chỉnh xã hội bằng các tập quán và đạo đức xã hội", 
                "Nhà nước đặt ra thuế và tiến hành thu các loại thuế"],
        correct: 2
    },
    {
        id: 14,
        quest: "Chức năng chính của Nhà nước gồm các loại chức năng sau",
        answers: ["Các chức năng kinh tế và các chức năng chính trị", 
                "Các chức năng đối nội và các chức năng đối ngoại", 
                "Các chức năng điều chỉnh và các chức năng giáo", 
                "Tất cả đều sai"],
        correct: 1
    },
    {
        id: 15,
        quest: "Hình thức chính thể của Nhà nước Cộng hòa xã hội chủ nghĩa Việt Nam hiện nay là:",
        answers: ["Quân chủ", 
                "Cộng hòa", 
                "Cộng hòa dân chủ", 
                "Quân chủ hạn chế"],
        correct: 2
    },
    {
        id: 16,
        quest: "Pháp luật xã hội chủ nghĩa là do:",
        answers: ["Kế thừa pháp luật tư sản",
                "Do nhà nước xã hội chủ nghĩa ban hành",
                "Sao chép một phần pháp luật tư sản",
                "Tất cả đều đúng"],
        correct: 1
    },
    {
        id: 17,
        quest: "Pháp luật có vai trò quan trọng đối với kinh tế, thể hiện ở việc:",
        answers: ["Pháp luật điều chỉnh các hoạt động kinh tế",
                "Thúc đẩy kinh tế bằng các chính sách ưu đãi, thông thoáng",
                "Bảo vệ nền kinh tế thông qua việc ngăn chặn, loại trừ các hoạt động kinh tế trái pháp luật",
                "Tất cả đều đúng"],
        correct: 3
    },
    {
        id: 18,
        quest: "Pháp luật không tồn tại trong xã hội nào sau đây",
        answers: ["Xã hội không có tư hữu",
                "Xã hội không có giai cấp",
                "Xã hội không có Nhà nước",
                "Tất cả đều đúng"],
        correct: 3
    },
    {
        id: 19,
        quest: "Văn bản quy phạm pháp luật là văn bản do:",
        answers: ["Chủ tịch nước ban hành",
                "Chính phủ ban hành",
                "Quốc hội ban hành",
                "Cơ quan Nhà nước có thẩm quyền ban hành"],
        correct: 3
    },
    {
        id: 20,
        quest: "Luật Giáo dục do cơ quan nào ban hành?",
        answers: ["Bộ giáo dục và đào tạo",
                "Quốc hội",
                "Bộ lao động thương binh và xã hội",
                "Chính phủ"],
        correct: 1
    },
    {
        id: 21,
        quest: "Xét ở khía cạnh trình độ, ý thức pháp luật được chia thành hai loại:",
        answers: ["ý thức pháp luật thông thường và ý thức pháp luật mang tính lý luận",
            "ý thức pháp luật cá nhân và ý thức pháp luật nhóm",
            "ý thức pháp luật lịch sử và ý thức pháp luật hiện tại",
            "ý thức pháp luật thấp và ý thức pháp luật cao"],
        correct: 0
    },
    {
        id: 22,
        quest: "Pháp luật Việt Nam chưa từng sử dụng hình thức pháp luật nào sau đây",
        answers: ["Tập quán pháp",
            "Tiền lệ pháp",
            "Văn bản quy phạm pháp luật",
            "Tất cả đều đúng"],
        correct: 1
    },
    {
        id: 23,
        quest: "Chức năng của pháp luật:",
        answers: ["Điều chỉnh",
            "Giáo dục",
            "Bảo vệ",
            "Tất cả đều đúng"],
        correct: 3
    },
    {
        id: 24,
        quest: 'Pháp luật được xem là',
        answers: ["Những quy tắc ứng xử, xử sự chung của một quốc gia",
            "Là do con người tự nghĩ ra",
            "Là do kết quả của đấu tranh giai cấp",
            "Là một phần của đời sống xã hội"],
        correct: 0
    },
    {
        id: 25,
        quest: 'Nguồn của Pháp luật có thể là',
        answers: ["Do nhà nước ban hành",
            "Do nhà nước thừa nhận",
            "Do nhà nước bổ sung, hoàn thiện",
            "Tất cả đều đúng"],
        correct: 3
    },
    {
        id: 26,
        quest: "Pháp luật thể hiện ý chí của giai cấp nào sau đây?",
        answers: ["Mọi tầng lớp, giai cấp trong xã hội",
            "Giai cấp thống trị",
            "Giai cấp bị trị",
            "Ý muốn chủ quan của nhà nước"],
        correct: 1
    },
    {
        id: 27,
        quest: 'Lực lượng nào sau đây sẽ đảm bảo Pháp luật được thực hiện?',
        answers: ["Nhà nước",
            "Giai cấp thống trị",
            "Giai cấp bị trị",
            "Lực lượng công an, quân đội"],
        correct: 0
    },
    {
        id: 28,
        quest: "Xét về mặt khách quan, Pháp luật ra đời là do?",
        answers: ["Chế độ tư hữu và đấu tranh giai cấp, cùng với sự ra đời của nhà nước",
            "Nhà nước ban hành pháp luật",
            "Do ý muốn chủ quan của con người",
            "Kết quả của những cuộc chiến tranh"],
        correct: 0
    },
    {
        id: 29,
        quest: "Về mặt chủ quan, Pháp luật là do?",
        answers: ["Chế độ tư hữu và đấu tranh giai cấp, cùng với sự ra đời của nhà nước",
            "Nhà nước ban hành hoặc thừa nhận pháp luật",
            "Do ý muốn chủ quan của con người",
            "Kết quả của những cuộc chiến tranh"],
        correct: 1
    },
    {
        id: 30,
        quest: "Tính cưỡng chế của Pháp luật khác với ý thức đạo đức, tôn giáo ở chỗ:",
        answers: ["Bắt buộc mọi người phải tuân thủ theo những quy định của Pháp luật",
            "Được nhà nước bảo vệ",
            "Thông qua các biện pháp tuyên truyền, biện pháp cưỡng chế của nhà nước.",
            "Tất cả các đáp án trên"],
        correct: 3
    },
    {
        id: 31,
        quest: "Văn bản pháp luật cấp dưới không được trái với văn bản cấp trên, là tính chất nào sau đây của Pháp luật",
        answers: ["Tính cưỡng chế của Pháp",
            "Tính phổ biến",
            "Tính khách quan",
            "Tính xác định chặt chẽ về hình thức"],
        correct: 3
    },
    {
        id: 32,
        quest: "Giữa pháp luật và kinh tế, thì",
        answers: ["Kinh tế quyết định đến pháp luật",
            "Pháp luật quyết định đến kinh tế",
            "Pháp luật và kinh tế không phụ thuộc vào nhau",
            "Tất cả đều đúng"],
        correct: 0
    },
    {
        id: 33,
        quest: "Để quản lý xã hội, thời kỳ phong kiến Trung Quốc đã sử dụng học thuyết nào sau đây là chủ yếu?",
        answers: ["Phật giáo",
            "Nho giáo",
            "Đạo giáo",
            "Chủ nghĩa mác xít"],
        correct: 1
    },
    {
        id: 34,
        quest: "Đặc điểm chung trong việc quản lý xã hội của các học thuyết Nho giáo, Đạo giáo, Phật giáo lấy yếu tố nào làm nòng cốt?",
        answers: ["Nhân nghĩa",
            "Pháp luật",
            "Ý thức cá nhân",
            "Ý thức tập thể"],
        correct: 0
    },
    {
        id: 35,
        quest: "Chức năng nào KHÔNG phải là chức năng của pháp luật:",
        answers: ["Chức năng điều chỉnh các quan hệ xã hội",
            "Chức năng xây dựng và bảo vệ tổ quốc",
            "Chức năng bảo vệ các quan hệ xã hội",
            "Chức năng giáo dục"],
        correct: 1
    },
    {
        id: 36,
        quest: "Thuộc tính (đặc trưng) nào sau đây là của pháp luật:",
        answers: ["Tính xác định chặt chẽ về mặt hình thức",
            "Điều chỉnh các quan hệ xã hội",
            "Cả A và B đều đúng",
            "Cả A và B đều sai"],
        correct: 0
    },
    {
        id: 37,
        quest: "Thuộc tính (đặc trưng) nào sau đây là của pháp luật:",
        answers: ["Giáo dục hành vi con người",
            "Tính được đảm bảo thực hiện bằng nhà nước",
            "Điều chỉnh các quan hệ xã hội",
            "Tính xác định chặt chẽ"],
        correct: 1
    },
    {
        id: 38,
        quest: "Pháp luật là quy tắc xử sự chung, được áp dụng đối với tất cả mọi người là thể hiện đặc trưng nào dưới đây của pháp luật?",
        answers: ["Tính quy phạm phổ biến.",
            "Tính phổ cập.",
            "Pháp luật và kinh tế không phụ thuộc vào nhau",
            "Tất cả đều đúng"],
        correct: 0
    },
    {
        id: 39,
        quest: "Pháp luật do Nhà nước ban hành và đảm bảo thực hiện",
        answers: ["Bằng quyền lực Nhà nước",
            "Bằng chủ trương của Nhà nước.",
            "Bằng chính sách của Nhà nước.",
            "Bằng uy tín của Nhà nước"],
        correct: 0
    },
    {
        id: 40,
        quest: "Pháp luật không quy định về những việc nào dưới đây ",
        answers: ["Nên làm",
            "Được làm",
            "Phải làm",
            "Ko được làm"],
        correct: 0
    },
]