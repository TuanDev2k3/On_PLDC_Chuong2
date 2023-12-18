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

// DE TRIET
let ques_Triet = [
    {
        id: 1,
        quest: "Triết học Mác ra đời một phần là kết quả kế thừa trực tiếp:",
        answers: ["Thế giới quan duy vật của Hê-ghen và phép biện chứng của Phơ-bách",
            "Thế giới quan duy vật của Phơ-bách và phép biện chứng của Hê-ghen",
            "Thế giới quan duy vật và phép biện chứng của cả Hê-ghen và Phơ-bách",
            "Cả ba đáp án trên đều sai"],
        correct: 1
    },
    {
        id: 2,
        quest: "Câu nói “dục tốc bất đạt” phê phán quan điểm nào trong triết học?",
        answers: ["Quan điểm “hữu khuynh”",
            "Quan điểm “tả khuynh”",
            "Quan điểm “biết tích lũy dần về lượng để làm biến đổi về chất theo quy luật”",
            "Tất cả các phương án đều đúng"],
        correct: 1
    },
    {
        id: 3,
        quest: "Câu nói “năng nhặt, chặt bị” thể hiện quan điểm nào trong triết học?",
        answers: ["Quan điểm “hữu khuynh”",
            "Quan điểm “biết tích lũy dần về lượng để làm biến đổi về chất theo quy luật”",
            "",
            "Tất cả các phương án đều đúng"],
        correct: 1
    },
    {
        id: 4,
        quest: "Bộ phận lý luận quan trọng nhất của chủ nghĩa Mác-Lênin là gì?",
        answers: ["Triết học Mác- Lênin",
            "Chủ nghĩa xã hội khoa học",
            "", ""],
        correct: 0
    },
    {
        id: 5,
        quest: "Quốc tế Cộng sản (Quốc tế III) được thành lập năm nào?",
        answers: ["1919",
            "1918",
            "", ""],
        correct: 0
    },
    {
        id: 6,
        quest: "Chủ nghĩa Mác – Lênin là",
        answers: ["Hệ thống chủ thuyết chính trị của C.Mác và V.I.Lênin",
            "Hệ thống quan điểm và học thuyết khoa học của C.Mác, Ph.Ăngghen và sự phát triển của V.I.Lênin",
            "", ""],
        correct: 1
    },
    {
        id: 7,
        quest: "Tiền đề lý luận cho sự ra đời của chủ nghĩa Mác là",
        answers: ["Triết học cổ điển Đức, Kinh tế chính trị Anh, Chủ nghĩa xã hội không tưởng Pháp",
            "Phong trào khai sáng Pháp, Cơ học cổ điển I.Niu – tơn; lý luận về chủ nghĩa vô chính phủ của Pru-đông",
            "", ""],
        correct: 0
    },
    {
        id: 8,
        quest: "V.I.Lênin đã đưa ra định nghĩa khoa học về phạm trù vật chất trong tác phẩm nào?",
        answers: ["Chủ nghĩa duy vật và chủ nghĩa kinh nghiệm phê phán",
            "Chủ nghĩa duy vật chiến đấu",
            "", ""],
        correct: 0
    },
    {
        id: 9,
        quest: "Sự kiện xã hội nào lần đầu tiên chứng minh tính hiện thực của chủ nghĩa Mác – Lênin trong lịch sử?",
        answers: ["Cách mạng tháng 10 Nga năm 1917",
            "Chiến tranh thế giới lần thứ II.",
            "", ""],
        correct: 0
    },
    {
        id: 10,
        quest: "Vấn đề cơ bản của triết học bao gốm những mặt nào",
        answers: ["Bản thể luận và nhân sinh quan",
            "Bản thể luận và nhận thức luận",
            "", ""],
        correct: 1
    },
    {
        id: 11,
        quest: "Chủ nghĩa duy vật có các hình thức cơ bản nào",
        answers: ["Duy vật chất phác, duy vật biện chứng",
            "Duy vật siêu hình, duy vật biện chứng, duy vật chất phác",
            "", ""],
        correct: 1
    },
    {
        id: 12,
        quest: "Chủ nghĩa duy tâm có những hình thức nào",
        answers: ["Duy tâm chủ quan, duy tâm khách quan",
            "Duy tâm tuyệt đối, duy tâm tương đối",
            "", ""],
        correct: 0
    },
    {
        id: 13,
        quest: "Bản chất của chủ nghĩa duy vật là gì",
        answers: [". Coi các yếu tố tinh thần đóng vai trò tuyệt đối ",
            "Coi vật chất có trước, ý thức có sau, vật chất quyết định ý thức",
            "", ""],
        correct: 1
    },
    {
        id: 14,
        quest: "Ai sáng tạo ra định nghĩa vật chất của Triết học Mác-Lênin",
        answers: ["C.Mác và Ph.Ăngghen",
            "V.I. Lênin",
            "", ""],
        correct: 1
    },
    {
        id: 15,
        quest: "Học thuyết triết học thừa nhận khả năng nhận thức thế giới của con người:",
        answers: ["Khả tri luận",
            "Bất khả tri luận",
            "", ""],
        correct: 0
    },
    {
        id: 16,
        quest: "Học thuyết triết học phủ nhận khả năng nhận thức thế giới của con ng¬ười",
        answers: ["Bất khả tri luận",
            "Thuyết nhị nguyên",
            "Cả b và c đều đúng", ""],
        correct: 2
    },
    {
        id: 17,
        quest: "Về thực chất, chủ nghĩa nhị nguyên triết học có cùng bản chất với hệ thống triết lý nào?",
        answers: ["Chủ nghĩa duy tâm",
            "Chủ nghĩa xét lại triết học",
            "", ""],
        correct: 0
    },
    {
        id: 18,
        quest: "Sự khẳng định: mọi sự vật, hiện tượng chỉ là “phức hợp những cảm giác” của cá nhân là quan điểm của trường phái triết học nào?",
        answers: ["Chủ nghĩa duy tâm chủ quan",
            "Chủ nghĩa duy vật duy cảm",
            "", ""],
        correct: 0
    },
    {
        id: 19,
        quest: "Người sáng lập tư tưởng biện chứng trong triết học Hy Lạp thời cổ đại là ai?",
        answers: ["Hêraclit",
            "Platon",
            "", ""],
        correct: 1
    },
    {
        id: 20,
        quest: "Nicolai Copecnich đã đưa ra học thuyết nào",
        answers: ["Thuyết địa tâm",
            "Thuyết nhật tâm",
            "", ""],
        correct: 1
    },
    {
        id: 21,
        quest: "Trường phái triết học nào xem thường lý luận",
        answers: ["Chủ nghĩa kinh nghiệm",
            "Chủ nghĩa duy tâm khách quan",
            "", ""],
        correct: 0
    },
    {
        id: 22,
        quest: "Trường phái triết học nào xem thường kinh nghiệm",
        answers: ["Chủ nghĩa duy vật siêu hình",
            "Chủ nghĩa kinh viện",
            "", ""],
        correct: 1
    },
    {
        id: 23,
        quest: "Trong triết học Hêghen giữa tinh thần và tự nhiên mối quan hệ với nhau như thế nào?",
        answers: ["Tinh thần là kết quả phát triển của tự nhiên",
            "Tự nhiên là sản phẩm của tinh thần, là một tồn tại khác của tinh thần",
            "", ""],
        correct: 1
    },
    {
        id: 24,
        quest: "Quan điểm triết học nào cho rằng thế giới thống nhất vì được con người nghĩ về nó như một thế thống nhất?",
        answers: ["Chủ nghĩa duy tâm chủ quan",
            "Chủ nghĩa duy tâm khách quan",
            "", ""],
        correct: 0
    },
    {
        id: 25,
        quest: "5 yếu tố của triết học Ngũ hành vận hành theo quy luật nào",
        answers: ["Sinh - Khắc - Thừa - Vũ",
            "Không theo quy luật nào",
            "", ""],
        correct: 0
    },
    {
        id: 26,
        quest: "Thế giới khách quan có đặc điểm nào sau đây",
        answers: ["Do con người tư duy",
            "Tồn tại không do ý muốn của con người",
            "Luôn được con người khám phá đầy đủ", ""],
        correct: 1
    },
    {
        id: 27,
        quest: "Ai là người hoàn thiện bộ Tư Bản của chủ nghĩa Mác",
        answers: ["Ph.Anghen",
            "Các Mác",
            "Lenin", ""],
        correct: 0
    },
    {
        id: 28,
        quest: "Một trong những tiền đề lý luận quan trọng để Đảng Cộng sản Việt Nam ra đời",
        answers: ["Phong trào đấu tranh của giai cấp công nhân",
            "Phong trào yêu nước",
            "Chủ nghĩa Mác – lênin", ""],
        correct: 2
    },
    {
        id: 29,
        quest: "Tư tưởng Hồ Chí Minh có nguồn gốc",
        answers: ["Chủ nghĩa Mác – Lênin ",
            "Truyền thống văn hóa dân tộc, tinh hoa văn hóa nhân loại",
            "", ""],
        correct: 0
    },
    {
        id: 30,
        quest: "Chủ nghĩa Mác – Lênin được truyền bá vào Việt Nam thông qua tổ chức nào dưới đây trong giai đoạn 1919-1945?",
        answers: ["Hội Việt Nam cách mạng Thanh niên",
            "Đông Dương cách mạng Đảng",
            "An Nam cộng sản Đảng", ""],
        correct: 0
    },

    // CHUONG 2
    {
        id: 31,
        quest: "Yếu tố cơ bản nhất, quan trọng nhất của ý thức là",
        answers: ["Tri thức",
            "Tình cảm",
            "", ""],
        correct: 0
    },
    {
        id: 33,
        quest: "Nội dung của mối quan hệ biện chứng giữa vật chất và ý thức là",
        answers: ["Vật chất có trước, ý thức có sau, vật chất quyết định ý thức.",
            "Vật chất có trước, ý thức có sau, vật chất quyết định ý thức, ý thức có thể tác động trở lại vật chất thông qua hoạt động của con người",
            "Vật chất có trước, ý thức có sau, ý thức quyết định vật chất", ""],
        correct: 1
    },
    {
        id: 34,
        quest: "Thời gian có mấy chiều?",
        answers: ["Không có chiều nào",
            "Một chiều đi từ thấp lên cao",
            "Một chiều đi từ quá khứ đến thực tại và tương lai",
            "Hai chiều từ quá khứ đến tương lai và ngược lại"],
        correct: 2
    },
    {
        id: 35,
        quest: "Vật chất là gì?",
        answers: ["Thế giới thực tại khách quan",
            "Phạm trù triết học chỉ thực tại khách quan",
            "Vật thể có kết cấu vật chất", ""],
        correct: 1
    },
    {
        id: 36,
        quest: "Thuộc tính cơ bản nhất của vật chất là gì",
        answers: ["Tồn tại khách quan",
            "Vận động",
            "Phát triển", ""],
        correct: 0
    },
    {
        id: 37,
        quest: "Phương thức tồn tại của vật chất là gì",
        answers: ["Thời gian",
            "Không gian",
            "Vận động", ""],
        correct: 2
    },
    {
        id: 38,
        quest: "Hình thức tồn tại của vật chất là gì",
        answers: ["Vận động",
            "Thời gian và không gian",
            "Vận động và đứng im", ""],
        correct: 1
    },
    {
        id: 39,
        quest: "Vận động hiểu theo nghĩa chung nhất là gì",
        answers: ["Sự thay đổi vị trí trong không gian",
            "Sự diễn tiến theo thời gian",
            "Sự biến đổi nói chung ",
            "Sự thay đổi về chất"],
        correct: 2
    },
    {
        id: 40,
        quest: "Đâu là các hình thức vận động cơ bản của vật chất",
        answers: ["Vận động sinh học và vận động xã hội",
            "Vận động cơ học và vận động xã hội",
            "Vận động cơ học, vật lý, hóa học, sinh học và xã hội", ""],
        correct: 2
    },
    {
        id: 41,
        quest: "Hình thức vận động bậc cao nhất của vật chất là gì",
        answers: ["Vận động xã hội",
            "Vận động hóa học",
            "Vận động sinh học", ""],
        correct: 0
    },
    {
        id: 42,
        quest: "Đứng im là gì?",
        answers: ["Là một trạng thái đặc biệt của vận động",
            "Một trạng thái biệt lập khỏi vật chất vận động",
            "Một trạng thái biệt lập khỏi vật chất vận động", ""],
        correct: 0
    },
    {
        id: 43,
        quest: "Không gian mang tính gì?",
        answers: ["Vừa chủ quan vừa khách quan",
            "Khách quan",
            "Chủ quan", ""],
        correct: 1
    },
    {
        id: 44,
        quest: "Thế giới thống nhất bởi tính chất gì?",
        answers: ["Vô hạn",
            "Tính vật chất",
            "Tính đa dạng", ""],
        correct: 1
    },
    {
        id: 45,
        quest: "Nguồn gốc của ý thức là gì?",
        answers: ["Nguồn gốc tự nhiên và xã hôi",
            "Nguồn gốc thực tiễn và khoa học",
            "Nguồn gốc cá nhân và xã hôi", ""],
        correct: 0
    },
    {
        id: 46,
        quest: "Nguồn gốc xã hội của ý thức là gì?",
        answers: ["Lao động và ngôn ngữ",
            "Cuộc sống cộng đồng xã hội",
            "Giáo dục", ""],
        correct: 0
    },
    {
        id: 47,
        quest: "Bản chất của ý thức thể hiện như thế nào",
        answers: ["Tính năng động sáng tạo",
            "Là hình ảnh chủ quan về thế giới khách quan",
            "Là hiện tượng xã hội mang bản chất xã hội",
            "Cả ba phương án trên"],
        correct: 3
    },
    {
        id: 48,
        quest: "Những yếu tố nào cấu thành ý thức?",
        answers: ["Tri thức, tình cảm, ý chí",
            "Khái niệm, phán đoán, suy luận",
            "Cảm giác, tri giác, biểu tưởng", ""],
        correct: 0
    },
    {
        id: 49,
        quest: "Vai trò của vật chất đối với ý thức như thế nào",
        answers: ["Vật chất quyết định ý thức",
            "Vật chất và ý thức nằm trong thể thống nhất cùng tồn tại",
            "Vật chất lệ thuộc vào ý thức", ""],
        correct: 0
    },
    {
        id: 50,
        quest: "Vai trò của ý thức đối với vật chất như thế nào",
        answers: ["Ý thức có tính độc lập tương đối tác động trở lại vật chất",
            "Ý thức phản ánh thụ động, rập khuôn, máy móc về vật chất",
            "Ý thức luôn vượt trước vật chất", ""],
        correct: 0
    },
    {
        id: 51,
        quest: "Theo quan điểm của chủ nghĩa duy vật biện chứng, nguồn gốc xã hội của ý thức là:",
        answers: ["Tư duy",
            "Lao động và ngôn ngữ",
            "", ""],
        correct: 1
    },
    {
        id: 52,
        quest: "Theo quan điểm của chủ nghĩa duy vật biện chứng",
        answers: ["Vận động là tuyệt đối, đứng im là tương đối, tạm thời.",
            "Vận động là tương đối, đứng im là tuyệt đối",
            "", ""],
        correct: 0
    },
    {
        id: 53,
        quest: "Bộ phận nào là phương thức tồn tại của ý thức:",
        answers: ["Tri thức",
            "Tình cảm",
            "Vô thức", ""],
        correct: 0
    },
    {
        id: 54,
        quest: "Vai trò của chủ nghĩa duy vật biện chứng?",
        answers: ["Đã cung cấp công cụ vĩ đại cho hoạt động nhận thức khoa học và thực tiễn cách mạng",
            "Sáng tạo ra một khuynh hướng triết học",
            "Đấu tranh chống thần học", ""],
        correct: 0
    },
    {
        id: 55,
        quest: "Bằng việc phân loại các hình thức vận động cơ bản, Ph.Ăngghen đã đặt cơ sở gì cho khoa học?",
        answers: ["Việc phân loại, phân ngành, hợp loại, hợp ngành khoa học",
            "Xác định tính chất của các ngành khoa học",
            "Xác định mục đích của khoa học", ""],
        correct: 0
    },
    {
        id: 56,
        quest: "Theo Đêmôcrit thì ý thức con người có cấu tạo từ yếu tố nào?",
        answers: ["Tự nhiên",
            "Nguyên tử",
            "Một loại nguyên tử đặc biệt", ""],
        correct: 1
    },
    {
        id: 57,
        quest: "Nguồn gốc xã hội trực tiếp quan trọng nhất quyết định sự ra đời và phát triển của ý thức là gì?",
        answers: ["Thực nghiệm khoa học",
            "Giáo dục con người",
            "Lao động và ngôn ngữ", ""],
        correct: 2
    },
    {
        id: 58,
        quest: "Quan điểm của triết học Mác – Lênin về bản chất của ý thức:",
        answers: ["Bản chất của ý thức con người là sự sáng tạo",
            "Ý thức là sự phản ánh năng động, sáng tạo lại hiện thực theo nhu cầu của thực tiễn xã hội.",
            "Ý thức mang bản chất trực giác", ""],
        correct: 1
    },
    {
        id: 59,
        quest: "Điền vào chỗ trống: “Tri thức là kết quả ..... của con người về thế giới hiện thực, làm tái hiện những thuộc tính, những quy luật của thế giới ấy và diễn đạt chúng dưới những hình thức ngôn ngữ hoặc hệ thống ký hiệu khác”.",
        answers: ["Sự trực giác",
            "Quá trình nhận thức",
            "Quá trình lao động", ""],
        correct: 1
    },
    {
        id: 60,
        quest: "Phát biểu nào dưới đây được xem là tri thức?",
        answers: ["Trái đất là một hành tinh",
            "Lá rụng về cội",
            "Chiến tranh là phương tiện đạt đến hòa bình", ""],
        correct: 0
    },
    // =================
    {
        id: 61,
        quest: "Tiêu chuẩn của chân lý theo triết học Mác-Lênin là gì",
        answers: ["Thực tiễn",
            "Khoa học",
            "Nhận thức",
            ""],
        correct: 0
    },
    {
        id: 62,
        quest: "Nguyên tắc thống nhất giữa lý luận với thực tiễn là nguyên tắc được rút ra trực tiếp từ:",
        answers: ["Mối quan hệ giữa vật chất và ý thức",
            "Học thuyết về giai cấp và đấu tranh giai cấp",
            "", ""],
        correct: 0
    },
    {
        id: 63,
        quest: "Quan điểm toàn diện được rút ra từ:",
        answers: ["Mối quan hệ giữa vật chất và ý thức",
            "Nguyên lý về mối liên hệ phổ biến",
            "Nguyên lý về sự phát triển", ""],
        correct: 1
    },
    {
        id: 64,
        quest: "Cách thức của sự phát triển là:",
        answers: ["Đấu tranh của các mặt đối lập để giải quyết mâu thuẫn",
            "Sự thay đổi về lượng dẫn đến sự thay đổi về chất và ngược lại",
            "Tất cả các phương án trên.", ""],
        correct: 1
    },
    {
        id: 65,
        quest: "Quan điểm ủng hộ cái mới, chống lại cái cũ, cái lỗi thời kìm hãm sự phát triển là quan điểm được rút ra trực tiếp từ:",
        answers: ["Quy luật thống nhất và đấu tranh các mặt đối lập",
            "Quy luật từ những thay đổi về lượng dẫn đến những thay đổi về chất và ngược lại",
            "Quy luật phủ định của phủ định", ""],
        correct: 2
    },
    {
        id: 66,
        quest: "Tư tưởng nôn nóng, đốt cháy giai đoạn phản ánh trực tiếp việc:",
        answers: ["Không vận dụng đúng quy luật thống nhất và đấu tranh của các mặt đối lập",
            "Không vận dụng đúng quy luật từ những thay đổi về lượng dẫn đến những thay đổi về chất và ngược lại",
            "Không vận dụng đúng quy luật phủ định của phủ định", ""],
        correct: 1
    },
    {
        id: 67,
        quest: "Đâu là các hình thức của phép biện chứng?",
        answers: ["Biện chứng chất phác, biện chứng duy tâm, biện chứng duy vật",
            "Biện chứng duy vật và biện chúng duy tâm",
            "Biện chứng cổ đại và biện chứng duy vật", ""],
        correct: 0
    },
    {
        id: 68,
        quest: "Các hình thức của biện chứng là gì?",
        answers: ["Biện chứng duy vật và biện chúng duy tâm",
            "Biện chứng cổ đại và biện chứng khoa học",
            "", ""],
        correct: 1
    },
    {
        id: 69,
        quest: "Nguyên nhân của sự phát triển là gì?",
        answers: ["Mâu thuẫn nội tại và đấu tranh giải quyết mâu thuẫn",
            "Sự tương tác giữa các sự vật",
            "Do ý thức của con người", ""],
        correct: 0
    },
    {
        id: 70,
        quest: "Phát triển là gì?",
        answers: ["Vận động",
            "Vận động tuần hoàn",
            "Vận động có khuynh hướng đi lên", ""],
        correct: 2
    },
    {
        id: 71,
        quest: "Phạm trù cái đơn nhất chỉ cái gì?",
        answers: ["Một sự vật đơn nhất",
            "Những thuộc tính riêng có ở một sự vật nào đó",
            "Sản phẩm duy nhất trên thị trường", "Tất cả đúng"],
        correct: 1
    },
    {
        id: 72,
        quest: "Mỗi nguyên nhân sinh ra mấy kết quả?",
        answers: ["Một kết quả",
            "Nhiều kết quả",
            "Có thể không sinh ra kết quả nào", ""],
        correct: 1
    },
    {
        id: 73,
        quest: "Một kết quả có thể do mấy nguyên nhân sinh ra?",
        answers: ["Nhiều nguyên nhân",
            "Một nguyên nhân",
            "", ""],
        correct: 0
    },
    {
        id: 74,
        quest: "Tất nhiên do nguyên nhân nào?",
        answers: ["Nguyên nhân cơ bản , bên trong",
            "Có điều kiện khách quan",
            "Tác động bên ngoài chi phối", ""],
        correct: 0
    },
    {
        id: 75,
        quest: "Tính chất của ngẫu nhiên và tất nhiên là  gì?",
        answers: ["Đều mang tính chủ quan",
            "Đều mang tính khách quan",
            "Tất nhiên khách quan, ngẫu nhiên chù quan", ""],
        correct: 1
    },
    {
        id: 76,
        quest: "Quan hệ giữa tất nhiên và ngẫu nhiên như thế nào?",
        answers: ["Bất biến",
            "Thường xuyên biến đổi và chuyển hóa cho nhau",
            "Không phổ biến", ""],
        correct: 1
    },
    {
        id: 77,
        quest: "Quan hệ giữa nội dung và hình thức là gì?",
        answers: ["Nội dung quyết định hình thức, hình thức tác động trở lại nội dung",
            "Hình thức quyết định nội dung",
            "Nội dung và hình thức biệt lập", ""],
        correct: 0
    },
    {
        id: 78,
        quest: "Một nội dung có mấy hình thức?",
        answers: ["Nhiều hình thức",
            "Một hình thức",
            "", ""],
        correct: 0
    },
    {
        id: 79,
        quest: "Quan hệ giữa bản chất và hiện tượng như thế nào?",
        answers: ["Hiện tượng quyết định bản chất",
            "Bản chất bị quy định bởi hiện tượng",
            "Chúng biệt lập với nhau",
            "Bản chất quyết định hiện tượng"],
        correct: 3
    },
    {
        id: 80,
        quest: "Quan hệ giữa khả năng và hiện thực như thế nào?",
        answers: ["Tồn tại trong mối liên hệ mật thiết, chuyển hóa cho nhau",
            "Khả năng thì chủ quan, hiện thực thì khách quan",
            "", ""],
        correct: 0
    },
    {
        id: 81,
        quest: "Quy luật nào chỉ khuynh hướng vận động phát triển của sự vật?",
        answers: ["Quy luật phủ định của phủ định",
            "Quy luật thống nhất và đấu tranh giữa các mặt đối lập",
            "Quy luật lượng-chất ", ""],
        correct: 0
    },
    {
        id: 82,
        quest: "Quy luật nào thể hiện cách thức của sự vận động phát triển?",
        answers: ["Quy luật phủ định của phủ định",
            "Quy luật lượng-chất",
            "", ""],
        correct: 1
    },
    {
        id: 83,
        quest: "Quy luật nào chỉ nguyên nhân của sự vận động phát triển?",
        answers: ["Quy luật phủ định của phủ định",
            "Quy luật lượng-chất",
            "Quy luật thống nhất và đấu tranh giữa các mặt đối lập", ""],
        correct: 2
    },
    {
        id: 84,
        quest: "Điểm nút là khái niệm chỉ cái gì?",
        answers: ["Điểm quan trọng trong quá trình vận động",
            "Điểm tột cùng của sự tích lũy về lượng",
            "Điểm bế tắc trong quá trình vận động", ""],
        correct: 0
    },
    {
        id: 85,
        quest: "Mỗi sự vật có bao nhiêu chất và lượng?",
        answers: ["Một chất và một phạm vi lượng tương ứng",
            "Nhiều chất và nhiều lượng",
            "", ""],
        correct: 0
    },
    {
        id: 86,
        quest: "Sự thống nhất giữa lượng và chất bị phá vỡ khi nào?",
        answers: ["Lượng phát triển quá nhanh",
            "Tích lũy về lượng vượt quá giới hạn của độ",
            "Có sự tích lũa về lượng", ""],
        correct: 1
    },
    {
        id: 87,
        quest: "Phủ định biện chứng có đặc điểm cơ bản nào?",
        answers: ["Tính khách quan và vĩnh viễn",
            "Tính khách quan và tính kế thừa",
            "Tính liên tục và gián đoạn", ""],
        correct: 1
    },
    {
        id: 88,
        quest: "Vận động của sự vật có tính chất gì?",
        answers: ["Tính chu kỳ thuần túy",
            "Có tính chu kỳ nhưng không lạp lại tuyệt đối cái ban đầu",
            "Tính ngẫu nhiên", ""],
        correct: 0
    },
    {
        id: 89,
        quest: "Câu ca dao “Thân em như hạt mưa rào. Hạt rơi xuống giếng, hạt vào vườn hoa” nói về cặp trù nào?",
        answers: ["Tất nhiên- ngẫu nhiên",
            "khả năng - Hiện thực",
            "Bản chất – hiện tượng", ""],
        correct: 0
    },
    {
        id: 90,
        quest: "Câu ca dao “cá không ăn muối cá ươn, con cãi cha mẹ trăm đường con hư” phản ánh cặp phạm trù nào?",
        answers: ["Tất nhiên- ngẫu nhiên",
            "Nguyên nhân – kết quả",
            "Bản chất – hiện tượng", ""],
        correct: 1
    },
    // ===================
    {
        id: 91,
        quest: "Câu 100: Có mấy lần phủ định biện chứng trong một chu kỳ vận động?",
        answers: ["Hai lần",
            "Ba lần",
            "Nhiều lần",
            "Số lần vô hạn định"],
        correct: 3
    },

    {
        id: 92,
        quest: " Câu 101: Có những hình thức nhận thức cảm tính nào?",
        answers: [" a. Cảm giác, cảm tưởng, biểu tượng",
            " b. Cảm giác, tri giác, biểu tượng",
            " c. Cảm giác, khái niệm, biểu tượng",
            " d. Tình cảm, niềm tin, ý chí"],
        correct: 1
    },

    {
        id: 93,
        quest: " Câu 102: Quan hệ giữa hai giai đoạn của quá trình nhận thức như thế nào?",
        answers: [" a. Nhận thức cảm tính và lý tính diễn ra độc lập",
            " b. Nhận thức lý tính và cảm tính có quan hệ biện chứng",
            " c. Nhận thức cảm tính và lý tính chỉ là một",
            " d. Khởi đầu là nhận thức lý tính, sau đến cảm tính"],
        correct: 1
    },

    {
        id: 94,
        quest: " Câu 103: Tính chất của chân lý là gì?",
        answers: [" a. Tính khách quan, tính tương đối, tính tuyệt đối, tính cụ thể",
            " b. Tính chủ quan",
            " c. Tính cá biệt",
            " d. Tính tuyệt đối, tính toàn diện, tính cụ thể"],
        correct: 0
    },

    {
        id: 95,
        quest: " Câu 104. Quan điểm của chủ nghĩa duy vật biện chứng về nguồn gốc của sự phát triển:",
        answers: [" a. Nguồn gốc của sự phát triển là ở bên ngoài sự vật hiện t¬ượng.",
            " b. Nguồn gốc của sự phát triển là do mâu thuẫn bên trong của sự vật hiện tượng quy định.",
            " c. Nguồn gốc của sự phát triển của sự vật hiện t¬ượng là do ý thức, tinh thần con ng¬ười quy định.",
            " d. Nguồn gốc của sự phát triển là do thượng đế tạo ra"],
        correct: 2
    },

    {
        id: 96,
        quest: " Câu 105. Nguyên lý về mối liên hệ phổ biến cho ta quan điểm nhận thức :",
        answers: [" a. Quan điểm toàn diện và quan điểm lịch sử - cụ thể",
            " b. Quan điểm phiến diện và quan điểm lịch sử - cụ thể",
            " c. Quan điểm lịch sử - cụ thể và quan điểm phát triển",
            " d. Quan điểm phát triển và quan điểm toàn diện"],
        correct: 0
    },

    {
        id: 97,
        quest: " Câu 106. Nguyên lý về sự phát triển cho ta quan điểm nhận thức :",
        answers: [" a. Quan điểm phát triển và quan điểm toàn diện",
            " b. Quan điểm toàn diện và quan điểm lịch sử cụ thể",
            " c. Quan điểm phát triển",
            " d. Quan điểm phát triển, quan điểm toàn diện và quan điểm lịch sử cụ thể"],
        correct: 3
    },

    {
        id: 98,
        quest: " Câu 107. Cơ sở lý luận của quan điểm phát triển là:",
        answers: [" a. Tính khách quan",
            " b. Tính đa dạng, phong phú",
            " c. Mối liên hệ phổ biến",
            " d. Nguyên lý về sự phát triển"],
        correct: 3
    },

    {
        id: 99,
        quest: " Câu 108. Quy luật được coi là hạt nhân của phép biện chứng là :",
        answers: [" a. Quy luật từ những thay đổi về lượng thành những thay đổi về chất và ngược lại.",
            " b. Quy luật thống nhất và đấu tranh của các mặt đối lập.",
            " c. Quy luật phủ định của phủ định.",
            " d. Cả ba quy luật trên."],
        correct: 1
    },

    {
        id: 100,
        quest: " Câu 109. Quy luật l¬ượng chất làm rõ vấn đề",
        answers: [" a. Nguồn gốc của sự phát triển",
            " b. Khuynh hư¬ớng của sự phát triển",
            " c. Cách thức của sự phát triển",
            " d. Động lực của sự phát triển"],
        correct: 2
    },

    {
        id: 101,
        quest: " Câu 110. Cách thức của sự phát triển là :",
        answers: [" a. Đấu tranh của các mặt để giải quyết mâu thuẫn",
            " b. Sự thay đổi về lượng dẫn đến thay đổi về chất và ngược lại.",
            " c. Quá trình tích luỹ về lượng.",
            " d. Quá trình phủ định cái cũ và sự ra đời của cái mới"],
        correct: 2
    },

    {
        id: 102,
        quest: " Câu 111. Chất của sự vật là:",
        answers: ["  a. Cấu trúc sự vật",
            "  b. Các thuộc tính sự vật",
            "  c. Tổng số các thuộc tính sự vật",
            "  d. Sự thống nhất hữu cơ của những thuộc tính"],
        correct: 3
    },

    {
        id: 103,
        quest: " Câu 112. Những bước nhảy ở từng lĩnh vực kinh tế, lĩnh vực chính trị, lĩnh vực xã hội. Đó là bước nhảy :",
        answers: ["  Toàn bộ",
            "  Cục bộ",
            "  Toàn diện",
            "  Cả a và c "],
        correct: 3
    },

    {
        id: 104,
        quest: " Câu 113. Tính chất của phủ định biện chứng là: ",
        answers: ["  a. Tính khách quan, tính kế thừa        ",
            "  b. Tính tự thân, tính kế thừa"],
        correct: 0
    },

    {
        id: 105,
        quest: " Câu 114. Quy luật phủ định của phủ định khái quát xu hướng tất yếu tiến lên của sự vật là:",
        answers: ["  a. Theo đường thẳng",
            "  b. theo đường tròn khép kín",
            "  c. Theo đường “xoáy ốc”"],
        correct: 2
    },

    {
        id: 106,
        quest: " Câu 115. Chân lý là:",
        answers: ["  a. Tri thức đúng",
            "  b. Tri thức phù hợp với thực tế",
            "  c. Tri thức phù hợp với hiện thực đ¬ược thực tiễn kiểm nghiệm."],
        correct: 2
    },

    {
        id: 107,
        quest: " Câu 116. Trong các hình thức cơ bản của hoạt động thực tiễn, hình thức nào là quan trọng nhất:",
        answers: ["  a.	Sản xuất vật chất",
            "  b.	Thực nghiệm khoa học"],
        correct: 0
    },

    {
        id: 108,
        quest: " Câu 117. Biện chứng của quá trình nhận thức theo quan điểm mácxit là:",
        answers: ["  a. Từ sự phản ánh những thuộc tính riêng lẻ bên ngoài đến phản ánh những đặc tính bản chất của sự vật",
            "  b. Từ trực quan sinh động đến tư duy trừu tượng và đến thực tiễn."],
        correct: 1
    },

    {
        id: 109,
        quest: " Câu 118. Trong nhận thức và hoạt động thực tiễn:",
        answers: ["  a. Trong nhận thức muốn tìm ra bản chất sự vật ta chỉ cần nghiên cứu những cái tất nhiên.",
            "  b. Trong hoạt động thực tiễn phải dựa vào cả cái tất nhiên và ngẫu nhiên"],
        correct: 0
    },

    {
        id: 110,
        quest: " Câu 119: Theo quan điểm của triết học Mác – Lênin thì cơ sở của mối liên hệ giữa các sự vật hiện tượng là:",
        answers: ["Theo sự quy định của con người nhằm để mô tả những sự gắn kết của các sự vật hiện tượng.",
                "Tính thống nhất vật chất của thế giới"],
        correct: 1
    },

    {
        id: 111,
        quest: " Câu 120:  Nguyên tắc nào được rút ra từ việc tìm hiểu nguyên lý về mối liên hệ phổ biến của triết học Mác – Lênin?",
        answers: ["  a.	Nguyên tắc đấu tranh",
            "  b.	Quan điểm toàn diện",
            "  c.	Quan điểm thực tiễn => nguyên tắc lý luận gắn liền với thực tiện"],
        correct: 2
    },

    {
        id: 112,
        quest: " Câu 121: Nguyên lý về sự phát triển của triết học Mác – Lênin là:",
        answers: ["  a.	Là một trường hợp đặc biệt của sự vận động. Là một quá trình biến đổi từ chất cũ sang chất mới. Là kết quả của một quá trình đấu tranh giữa các mặt đối lập bên trong các sự vật hiện tượng của thế giới hiện thực khách quan.",
            "  b.	Phát triển là một quá trình tiến lên liên tục, trơn tru, không có những bước quanh co, phức tạp, không có mâu thuẫn."],
        correct: 0
    },

    {
        id: 113,
        quest: " Câu 122: Theo quan điểm của triết học Mác – Lênin, sự khác biệt căn bản giữa vận động với phát triển là:",
        answers: ["  a.	Sự vận động và phát triển là hai quá trình độc lập, tách rời nhau.",
            "  b.	Sự phát triển là một trường hợp đặc biệt của vận động. Là một giai đoạn của sự vận động, phát triển là sự vận động tiến lên."],
        correct: 1
    },

    {
        id: 114,
        quest: " Câu 123: Nguyên tắc nào được rút ra từ nguyên lý về sự phát triển?",
        answers: ["  a.	Quan điểm phát triển",
            "  b.	Nguyên tắc nghiên cứu có trọng tâm"],
        correct: 0
    },

    {
        id: 115,
        quest: " Câu 124: Quan điểm phát triển được rút ra từ:",
        answers: ["  a.	Nguyên lý về mối liên hệ phổ biến",
            "  b.	Nguyên lý về sự phát triển"],
        correct: 1
    },

    {
        id: 116,
        quest: " Câu 125: Ví dụ nào dưới đây minh họa cho nguyên lý về sự phát triển?",
        answers: ["  a.	Hết cơn bĩ cực tới hồi thái lai",
            "  b.	Hết đêm trời lại sáng"],
        correct: 0
    },

    {
        id: 117,
        quest: " Câu 126: Vì sao cái riêng lại phong phú, đa dạng hơn cái chung?",
        answers: ["  a.	Vì cái riêng tồn tại nhiều vẻ",
            "  b.	Vì trong cái riêng ngoài cái chung ra nó còn tồn tại cái đơn nhất."],
        correct: 1
    },

    {
        id: 118,
        quest: " Câu 127: Điền vào chỗ trống: “Tất nhiên là cái do những ..... bên trong của kết cấu vật chất nhất định và trong những điều kiện nhất định nó phải xảy ra như thế, không thể khác”.",
        answers: ["  a.	Nguyên nhân cơ bản",
            "  b.	Nhân tố cơ bản"],
        correct: 0
    },

    {
        id: 119,
        quest: " Câu 128: Theo chủ nghĩa Mác – Lênin, muốn nhận thức được cái tất nhiên ta phải làm thế nào?",
        answers: ["  a.	Nhận thức thế giới khách quan",
            "  b.	Nhận thức thông qua hàng loạt cái ngẫu nhiên"],
        correct: 1
    },

    {
        id: 120,
        quest: " Câu 129: Ví dụ nào dưới đây là sự ngẫu nhiên?",
        answers: ["  a.	Trường đẹp thì trò ngoan",
            "  b.	Vật chất luôn gắn liền với vận động"],
        correct: 0
    },
// =============
    {
        id: 121,
        quest: " Câu 130: Theo quan điểm triết học Mác – Lênin, phạm trù nội dung là:",
        answers: ["  a.	Tổng hợp tất cả những mặt, những yếu tố, những quá trình tạo nên sự vật.",
            "  b.	Tổng hợp tất cả những mặt, những mối liên hệ tất nhiên, tương đối ổn định bên trong sự vật, quy định sự vận động và phát triển của sự vật."],
        correct: 0
    },


    {
        id: 122,
        quest: " Câu 131: Phạm trù nào dùng để chỉ tổng hợp tất cả những mặt, những mối liên hệ tất nhiên, tương đối ổn định bên trong sự vật, quy định sự vận động và phát triển của sự vật?",
        answers: ["  a.	Thống nhất",
            "  b.	Bản chất"],
        correct: 1
    },

    {
        id: 123,
        quest: " Câu 132: Theo triết học Mác – Lênin phạm trù nào dùng để chỉ những gì chưa có, nhưng sẽ có, sẽ tới khi có điều kiện tương ứng?",
        answers: ["  Cơ hội",
            "  Khả năng"],
        correct: 1
    },

    {
        id: 124,
        quest: " Câu 133: Theo quan điểm triết học Mác – Lênin, phạm trù chất là:",
        answers: ["  a.	Một phạm trù triết học dùng để chỉ tính quy định khách quan vốn có của sự vật, là sự thống nhất hữu cơ của những thuộc tính làm cho sự vật nó là nó chứ không phải là cái khác.",
            "  b.	Tổng hợp tất cả những mặt, những mối liên hệ tất nhiên, tương đối ổn định bên trong sự vật, quy định sự vận động và phát triển của sự vật."],
        correct: 0
    },

    {
        id: 125,
        quest: " Câu 134: Điền vào chỗ trống: “Lượng là một phạm trù triết học dùng để chỉ .... vốn có của sự vật về mặt số lượng, quy mô, trình độ, nhịp điệu của sự vận động và phát triển cũng như các thuộc tính của sự vật”.",
        answers: ["  a.	Thuộc tính",
            "  b.	Tính quy định khách quan"],
        correct: 1
    },

    {
        id: 126,
        quest: " Câu 135: Phạm trù nào của triết học Mác – Lênin dùng để chỉ khoảng giới hạn trong đó sự thay đổi về lượng của sự vật chưa làm thay đổi căn bản chất của sự vật?",
        answers: ["  Độ",
            "  Điểm nút"],
        correct: 0
    },

    {
        id: 127,
        quest: " Câu 136: Phạm trù “bước nhảy” theo quan điểm của triết học Mác – Lênin là:",
        answers: ["  a.	Sự thay đổi về lượng của sự vật trước đó gây nên",
            " b.	Sự chuyển hóa về chất của sự vật do sự thay đổi về lượng của sự vật trước đó gây nên"],
        correct: 1
    },

    {
        id: 128,
        quest: " Câu 137: Điền vào chỗ trống: “Mặt đối lập là những mặt có những đặc điểm, những thuộc tính quy định có khuynh hướng vận động và biến đổi......, tồn tại một cách khách quan bên trong các sự vật hiện tượng trong tự nhiên, xã hội, tư duy”.",
        answers: ["  Khác nhau",
            "  Trái ngược nhau"],
        correct: 1
    },

    {
        id: 129,
        quest: " Câu 138: Khái niệm thống nhất giữa các mặt đối lập theo quan điểm của triết học Mác – Lênin:",
        answers: ["  a.	Là sự nương tựa lẫn nhau, tồn tại không tách rời nhau giữa các mặt đối lập, sự tồn tại của mặt này phải lấy sự tồn tại của mặt kia làm tiền đề.",
            "  b.	Là sự nương tựa lẫn nhau, tồn tại không tách rời giữa các mặt đối lập."],
        correct: 0
    },

    {
        id: 130,
        quest: " Câu 139: Khái niệm đấu tranh giữa các mặt đối lập theo quan niệm của triết học Mác – Lênin là?",
        answers: ["  a.	Sự tác động theo xu hướng bài trừ và phủ định lẫn nhau giữa các mặt đối lập.",
            "  b.	Sự tác động giữa các mặt đó."],
        correct: 0
    },

    {
        id: 131,
        quest: " Câu 140: Theo quan niệm triết học Mác – Lênin, mâu thuẫn biện chứng là?",
        answers: ["  a.	Trạng thái mà ở đó bao hàm cả hai trạng thái vừa thống nhất vừa đấu tranh của các mặt đối lập.",
            "  b.	Là trạng thái dùng để chỉ sự đấu tranh của các mặt đối lập."],
        correct: 1
    },


    {
        id: 132,
        quest: " Câu 141: Trong hàng hóa, những thuộc tính nào là mâu thuẫn?",
        answers: ["  a.	Bao bì và khối lượng",
            "  b.	Giá trị và giá trị sử dụng"],
        correct: 1
    },

    {
        id: 133,
        quest: " Câu 142: Sự thống nhất của các mặt đối lập gắn liền với trạng thái nào của các sự vật hiện tượng trong thế giới khách quan?",
        answers: ["  a.	Sự vật hiện tượng đang vận động và biến đổi",
            "  b.	Sự vật hiện tượng đang bị tiêu vong"],
        correct: 0
    },

    {
        id: 134,
        quest: " Câu 143: Những đặc trưng cơ bản của phủ định biện chứng?",
        answers: ["  a.	Khách quan và kế thừa",
            "  b.	Khách quan và biện chứng"],
        correct: 0
    },

    {
        id: 135,
        quest: " Câu 144: Theo quan điểm của triết học Mác – Lênin, để hình thành cái mới thì sự phủ định được thực hiện ít nhất là mấy lần?",
        answers: ["  Một",
            "  Hai",
            "  Ba",
            "  Bốn"],
        correct: 1
    },

    {
        id: 136,
        quest: " Câu 145: Theo quan điểm của triết học Mác – Lênin, xu hướng của sự phát triển được mô phỏng như thế nào?",
        answers: ["  a.	Xoáy trôn ốc",
            "   b.	Đường thẳng tiến lên"],
        correct: 0
    },

    {
        id: 137,
        quest: " Câu 146: Theo quan niệm của triết học Mác – Lênin, thực tiễn là:",
        answers: ["  a.	Toàn bộ những hoạt động nhằm cải biến tự nhiên và xã hội",
            "  b.	Toàn bộ những hoạt động vật chất có ý thức của con người nhằm cải biến tự nhiên và xã hội",
            "  c.	Toàn bộ những hoạt động vật chất, mang tính lịch sử - xã hội của con người nhằm cải biến tự nhiên và xã hội"],
        correct: 2
    },

    {
        id: 138,
        quest: " Câu 147: Theo quan niệm của triết học Mác – Lêni, hình thức tư duy phán đoán là?",
        answers: ["  a.	Phán đoán là một hình thức của tư duy liên kết các khái niệm lại với nhau để khẳng định hoặc phủ định một đặc điểm, một thuộc tính nào đó của đối tượng.",
            "  b.	Phán đoán là cách thức dùng để dự đoán một đặc điểm, thuộc tính của đối tượng nhận thức"],
        correct: 0
    },

    {
        id: 139,
        quest: " Câu 148: Theo quan niệm Mác – Lênin, hình thức tư duy suy luận là gì?",
        answers: ["  a.	Là những lập luận được suy ra từ sự quan sát thực tế",
            "  b.	Là hình thức của tư duy liên kết các phán đoán lại với nhau để rút ra một tri thức mới."],
        correct: 1
    },

    {
        id: 140,
        quest: " Câu 149: Ví dụ nào dưới đây là “kinh nghiệm”?",
        answers: ["  a.	Một nam châm bao giờ cũng có hai cực là cực bắc và cực nam.",
            "  b.	Nhất nước, nhì phân, tam cần, tứ giống"],
        correct: 1
    },

    {
        id: 141,
        quest: " Câu 150: Theo quan điểm siêu hình thì sự phủ định là:",
        answers: ["  a.	Sự thay thế sự vật này bằng sự vật khác trong quá trình vận động và phát triển.",
            "  b.	Xóa bỏ hoàn toàn cái cũ, chấm dứt sự phát triển của chúng"],
        correct: 1
    },
    {
        id: 142,
        quest: "Câu ca dao “ớt nào mà ớt chẳng cay, gái nào mà gái chẳng hay ghen chồng” thể hiện cặp phạm trù nào?",
        answers: ["Cái riêng - cái chung",
            "Tất nhiên- ngẫu nhiên",
            "Bản chất – hiện tượng", ""],
        correct: 0
    },
    {
        id: 142,
        quest: "Câu nói “nhất sĩ nhì nông, hết gạo chay rông, nhất nông nhì sĩ” phản ánh tư tưởng triết học gì?",
        answers: ["Sự tác động của giáo dục và thực tiễn khách quan",
            "Sự tác động qua lại giữa vật chất và ý thức",
            "Mối quan hệ giữa nguyên nhân và kết quả", ""],
        correct: 1
    },
    {
        id: 143,
        quest: "'chỉnh chua cũng thể là chanh, chẳng ngọt cũng thể cam sành chín cây' thế hiện phạm trù nào?",
        answers: ["Chất",
            "Độ",
            "Lượng", ""],
        correct: 0
    },
    {
        id: 144,
        quest: "Câu thành ngữ: “Chạy trời không khỏi nắng” phản ánh điều gì?",
        answers: ["Tính quy định vốn có của thế giới khách quan",
            "Phải thừa nhận thực tế khách quan và tìm cách cải tạo hiện thực",
            "", ""],
        correct: 1
    },
    {
        id: 145,
        quest: "Câu tục ngữ “Có thực mới vực được đạo” là muốn khẳng định quy luật nào sau đây?",
        answers: ["Vật chất quyết định ý thức",
            "Quy luật mâu thuẫn giữa các mặt đối lập",
            "", ""],
        correct: 0
    },
    {
        id: 146,
        quest: "Câu tục ngữ, thành ngữ nào dưới đây nói về sự phát triển?",
        answers: ["Tre già măng mọc",
            "Có trí thì nên",
            "Nước chảy đá mòng", ""],
        correct: 0
    },
    {
        id: 147,
        quest: "Nhận thức lý tính được thể hiện qua các hình thức cơ bản nào?",
        answers: ["Khái niệm – Phán đoán – Suy luận",
            "Cảm giác – Phán đoán – Kết luận",
            "", ""],
        correct: 0
    },
    {
        id: 148,
        quest: ": Hình thức phản ánh cao nhất và phức tạp nhất của giai đoạn trực quan sinh động là:",
        answers: ["Cảm giác",
            "Biểu tượng",
            "Phán đoán", ""],
        correct: 1
    },
    {
        id: 149,
        quest: "Kết quả của quá trình giải quyết mâu thuẫn trong thực tiễn được thể hiện qua phạm trù nào của phép BCDV?",
        answers: ["Bước nhảy",
            "Điểm nút",
            "Phát triển", ""],
        correct: 0
    },
    {
        id: 150,
        quest: "Triết học Trung Hoa cổ đại đưa ra quan điểm về vật chất đó là quan niệm",
        answers: ["Âm dương - Ngũ hành",
            "Nhân – Lễ - Chính Danh",
            "Nho giáo", ""],
        correct: 0
    },
]