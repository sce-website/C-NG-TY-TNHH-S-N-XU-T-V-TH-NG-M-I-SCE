import {
  SoftwareProduct,
  HardwareProduct,
  SmartCabinetModel,
  UpgradePackage,
  MaintenanceService,
  CaseStudy,
  Partner
} from '../types';

export const COMPANY_INFO = {
  name: 'CÔNG TY TNHH SẢN XUẤT VÀ THƯƠNG MẠI SCE',
  internationalName: 'SCE TRADING AND PRODUCTION COMPANY LIMITED',
  shortName: 'SCE (Smart Company Education)',
  taxId: '0318877762',
  foundedDate: '21/03/2025 (Thay đổi lần 1: 28/01/2026)',
  director: 'VÕ TẤN DUY',
  hotline: '0946 260 370',
  email: 'sce.pkd@gmail.com',
  website: 'smartcompanyedu.com',
  address: '42 đường 22, Phường Bình Hưng Hoà, TP. Hồ Chí Minh, Việt Nam',
  registeredAddress: '47 đường 22, Phường Bình Hưng Hòa, TP. Hồ Chí Minh, Việt Nam',
  slogan: 'Giải pháp hạ tầng công nghệ an toàn và bền vững cho trường học',
  missionStatement: 'Chúng tôi không chỉ cung cấp thiết bị. Chúng tôi đồng hành cùng nhà trường xây dựng môi trường học tập an toàn và hiện đại.',
  principalMessage: 'Ngân sách nhà trường là hữu hạn. Nhưng sự an toàn và cơ hội tiếp cận công nghệ của học sinh là vô hạn.',
  brandMeaning: {
    s: { letter: 'S', word: 'Smart', desc: 'Giải pháp hạ tầng công nghệ thông minh, tích hợp quản lý tự động và tiết kiệm điện.' },
    c: { letter: 'C', word: 'Company', desc: 'Đơn vị sản xuất & thương mại uy tín, tập trung chuyên sâu vào môi trường giáo dục & doanh nghiệp.' },
    e: { letter: 'E', word: 'Education', desc: 'Thiết kế kỹ thuật chuyên biệt, chuẩn sư phạm, an toàn tối đa cho học sinh và giáo viên.' }
  },
  stats: [
    { label: 'Đối tác & Khách hàng', value: '15+', icon: 'Building2' },
    { label: 'Máy tính đồng bộ phân phối', value: '1000+', icon: 'Monitor' },
    { label: 'License Phần mềm triển khai', value: '500+', icon: 'Key' },
    { label: 'Đối tác hãng công nghệ', value: '5+', icon: 'Handshake' },
  ],
  pillars: [
    {
      number: '01',
      title: 'SAFETY FIRST (AN TOÀN)',
      desc: 'An toàn điện, chống sốc, tự ngắt thông minh và bảo vệ tài sản công của trường học là ưu tiên số 1.'
    },
    {
      number: '02',
      title: 'EFFICIENCY (TIẾT KIỆM)',
      desc: 'Tối ưu chi phí đầu tư, nâng cấp tận dụng máy cũ giúp tiết kiệm hàng trăm triệu đồng cho ngân sách.'
    },
    {
      number: '03',
      title: 'EDUCATION FOCUS (HIỆU QUẢ)',
      desc: 'Thiết kế chuyên biệt cho môi trường sư phạm, đội ngũ kỹ thuật am hiểu văn hóa trường học.'
    }
  ],
  commitments: [
    { number: 1, title: 'An toàn hệ thống', desc: 'Hệ thống điện & thiết bị được kiểm định, đảm bảo tiêu chuẩn chống cháy nổ trong trường học.' },
    { number: 2, title: 'Minh bạch chi phí', desc: 'Khảo sát tận nơi miễn phí, báo giá chi tiết từng hạng mục, không phát sinh chi phí phụ.' },
    { number: 3, title: 'Hỗ trợ kỹ thuật dài hạn', desc: 'Đội ngũ kỹ sư CNTT trực tiếp hỗ trợ, xử lý sự cố trong vòng 2 - 4 giờ làm việc.' },
    { number: 4, title: 'Bảo trì định kỳ', desc: 'Chế độ bảo dưỡng, vệ sinh công nghiệp và kiểm tra tải định kỳ mỗi học kỳ.' }
  ],
  workflowSteps: [
    { step: 1, title: 'Khảo sát (Miễn phí)', desc: 'Kỹ sư SCE đến tận trường kiểm tra thực trạng phòng máy, hạ tầng điện, số lượng máy.' },
    { step: 2, title: 'Thiết kế giải pháp', desc: 'Lên phương án nâng cấp tối ưu, tính toán bài toán tiết kiệm chi phí trình Ban Giám Hiệu.' },
    { step: 3, title: 'Ký hợp đồng', desc: 'Thống nhất phương án, cam kết chất lượng linh kiện, thời gian bàn giao và bảo hành.' },
    { step: 4, title: 'Thi công chuyên nghiệp', desc: 'Triển khai thay thế linh kiện, vệ sinh công nghiệp, luồn gọn dây điện theo chuẩn an toàn.' },
    { step: 5, title: 'Nghiệm thu & Bàn giao', desc: 'Test tốc độ khởi động (<30s), kiểm tra phần mềm dạy học, hướng dẫn vận hành cho giáo viên.' },
    { step: 6, title: 'Bảo trì định kỳ', desc: 'Đồng hành xuyên suốt năm học, kiểm tra định kỳ và hỗ trợ xử lý sự cố phát sinh.' }
  ]
};

export const SOFTWARE_PRODUCTS: SoftwareProduct[] = [
  {
    id: 'm365-family',
    name: 'Microsoft 365 Family',
    category: 'software',
    subCategory: 'office365',
    price: 550000,
    unit: 'Tài khoản',
    duration: '12 tháng',
    summary: 'Gói cá nhân & gia đình cao cấp với 6 tài khoản riêng biệt, 6TB Cloud và đầy đủ ứng dụng Office tích hợp AI Copilot.',
    badge: 'Tiết kiệm nhất cho cá nhân/GV',
    features: [
      'Tối đa 6 tài khoản riêng biệt (1 tài khoản chính và 5 tài khoản phụ)',
      'Mỗi người dùng đăng nhập đồng thời trên 5 thiết bị (PC, Mac, iPad, iPhone, Android)',
      '1 TB lưu trữ OneDrive riêng biệt cho mỗi thành viên (tổng cộng 6 TB)',
      'Dữ liệu hoàn toàn riêng tư giữa các thành viên',
      'Đầy đủ bộ ứng dụng Word, Excel, PowerPoint, Outlook, OneNote cập nhật liên tục',
      'Tích hợp AI Copilot thông minh soạn thảo văn bản và phân tích số liệu'
    ],
    targetAudience: 'Cá nhân & Gia đình',
    pros: ['Giá thành cực kỳ tiết kiệm (chỉ 550.000đ/năm)', 'Dung lượng cloud 1TB/người', 'Hỗ trợ đa nền tảng PC/Mac/Mobile'],
    consOrNotes: 'Lưu ý: Đối với Trường học / Doanh nghiệp không dùng bản này được vì sai mục đích sử dụng bản quyền. Không dùng email đuôi EDU để tạo.',
    popular: false
  },
  {
    id: 'm365-business-standard',
    name: 'Microsoft 365 Business Standard',
    category: 'software',
    subCategory: 'office365',
    price: 1000000,
    unit: 'Máy / User',
    duration: '12 tháng',
    summary: 'Giải pháp toàn diện cho Doanh nghiệp & Quản lý Giáo dục: Email doanh nghiệp tên miền riêng, họp MS Teams, 1TB OneDrive và trọn bộ Office.',
    badge: 'Chuẩn Doanh Nghiệp & Quản Lý',
    features: [
      'Ứng dụng Office đầy đủ cài đặt máy tính (PC/Mac) & Web: Word, Excel, PowerPoint, Outlook, OneNote',
      'Access và Publisher chuyên sâu cho máy tính Windows',
      'Email doanh nghiệp 50 GB theo tên miền tùy chỉnh (ten_ban@ten_doanh_nghiep.com)',
      '1 TB OneDrive Cloud bảo mật cấp doanh nghiệp cho mỗi người dùng',
      'Microsoft Teams: Chat, gọi thoại, họp video trực tuyến & tổ chức Webinar hội thảo',
      'Ứng dụng hiện đại bổ sung: Microsoft Loop, Clipchamp, Bookings, Planner và Forms',
      'Hỗ trợ cài đặt trên tối đa 5 máy tính (PC/Mac), 5 máy tính bảng và 5 điện thoại'
    ],
    targetAudience: 'Doanh nghiệp',
    pros: [
      'Có Email doanh nghiệp tên miền riêng 50GB',
      'Có công cụ hội thảo trực tuyến MS Teams & đặt lịch Bookings',
      'Cài đặt đầy đủ trên 5 máy tính/User'
    ],
    consOrNotes: 'Thích hợp cho Ban giám hiệu, Phòng ban văn phòng, Doanh nghiệp và Tổ chức giáo dục.',
    popular: true
  },
  {
    id: 'office-pro-plus-2021',
    name: 'Microsoft Office Professional Plus 2021',
    category: 'software',
    subCategory: 'office',
    price: 3300000,
    unit: 'Tài khoản',
    duration: 'Vĩnh viễn',
    summary: 'Bản quyền Office trọn đời không cần gia hạn hàng năm. Đầy đủ Word, Excel, PowerPoint, Outlook, Access, Publisher 2021.',
    badge: 'Bản quyền Vĩnh Viễn',
    features: [
      'Microsoft Word 2021: Soạn thảo tài liệu văn bản chuyên nghiệp',
      'Microsoft Excel 2021: Quản lý, phân tích bảng tính và biểu đồ nâng cao',
      'Microsoft PowerPoint 2021: Thiết kế bài thuyết trình trực quan, sinh động',
      'Microsoft Outlook 2021: Quản lý Email cá nhân và đơn vị thông minh',
      'Microsoft Access 2021: Xây dựng và quản trị hệ thống cơ sở dữ liệu',
      'Microsoft Publisher 2021: Thiết kế ấn phẩm truyền thông và bố cục trang',
      'Microsoft OneNote 2021: Ghi chú nhanh và lưu trữ ý tưởng số'
    ],
    targetAudience: 'Tất cả',
    systemRequirements: 'Windows 10/11, CPU 1.6 GHz trở lên (2 nhân), RAM tối thiểu 4GB (64-bit) hoặc 2GB (32-bit), Ổ cứng trống 4.0 GB.',
    pros: ['Mua 1 lần dùng vĩnh viễn', 'Không phát sinh chi phí gia hạn', 'Hoạt động offline ổn định'],
    consOrNotes: 'Gắn liền với 1 tài khoản/thiết bị cài đặt, phù hợp trang bị lâu dài cho phòng ban chuyên môn.',
    popular: true
  },
  {
    id: 'win11-pro-dsp-oem',
    name: 'Windows 11 Pro 64Bit DSP OEI DVD',
    category: 'software',
    subCategory: 'windows',
    price: 2000000,
    unit: 'Bộ',
    duration: 'Vĩnh viễn',
    summary: 'Bản quyền Windows 11 Pro chính hãng dạng đĩa DVD + Tem Product Key OEM, gắn liền phần cứng máy tính lắp mới hoặc máy mua mới.',
    badge: 'OEM Tối Ưu Chi Phí',
    features: [
      'Đặc điểm: Vỏ hộp, đĩa DVD cài đặt 64-bit và tem Product Key xác thực COA',
      'Quyền lợi: Bản quyền vĩnh viễn gắn liền với phần cứng của máy tính',
      'Tính năng bảo mật cao cấp: BitLocker, Windows Sandbox, Remote Desktop, Hyper-V',
      'Phù hợp cho máy tính lắp ráp mới, trang bị phòng máy trường học, phòng tin học'
    ],
    targetAudience: 'Trường học',
    pros: ['Chi phí rất tiết kiệm cho phòng máy mới', 'Bản quyền vĩnh viễn theo máy', 'Bảo mật Windows 11 Pro tối ưu'],
    consOrNotes: 'Bản quyền OEM gắn liền với bo mạch chủ máy tính, không hỗ trợ chuyển đổi sang máy khác khi thay máy.',
    popular: false
  },
  {
    id: 'win11-pro-fpp',
    name: 'Windows 11 Pro FPP (Full Packaged Product)',
    category: 'software',
    subCategory: 'windows',
    price: 5250000,
    unit: 'Bộ (Box)',
    duration: 'Vĩnh viễn',
    summary: 'Bản quyền cao cấp nhất dạng Hộp Box vật lý chính hãng kèm USB cài đặt + Key bản quyền. Cho phép chuyển đổi sang máy tính khác linh hoạt.',
    badge: 'Bản Quyền Đầy Đủ (FPP)',
    features: [
      'Mã sản phẩm chính hãng (PN): HAV-00163 (Phiên bản phổ biến chính thức tại Việt Nam)',
      'Hình thức đóng gói: Hộp giấy vật lý nguyên seal, bên trong chứa USB cài đặt chính hãng và thẻ Key bản quyền',
      'Thời hạn bản quyền: Vĩnh viễn, không cần gia hạn định kỳ',
      'Khả năng tái sử dụng độc quyền: Cho phép gỡ bỏ, cài đặt lại nhiều lần và chuyển đổi sang máy tính khác khi nâng cấp phần cứng',
      'Kiến trúc hệ thống: 64-bit hiện đại, hỗ trợ nâng cấp cập nhật bảo mật Microsoft dài hạn'
    ],
    targetAudience: 'Tất cả',
    pros: [
      'Tự do chuyển bản quyền sang máy tính mới không bị mất bản quyền',
      'Có sẵn USB cài đặt chính hãng Microsoft tốc độ cao',
      'Đầy đủ hóa đơn và giấy phép FPP chuẩn kiểm toán doanh nghiệp'
    ],
    consOrNotes: 'Khoản đầu tư trọn đời dài hạn tốt nhất cho máy tính quản lý và giáo viên.',
    popular: false
  }
];

export const SMART_CABINETS: SmartCabinetModel[] = [
  {
    id: 'smart-charge-30',
    name: 'Tủ sạc thông minh Smart-Charge SCE 30 Khay',
    capacity: '30 - 32 Laptop / Tablet / iPad',
    dimensions: 'Cao 1150mm x Rộng 850mm x Sâu 550mm',
    material: 'Khung thép dập định hình cao cấp sơn tĩnh điện chống cháy nổ, cánh mở 2 bên',
    electricalSafety: [
      'Hệ thống Smart Timer tự động ngắt điện khi toàn bộ thiết bị đã sạc đầy',
      'Bộ chống sốc điện & cầu dao chống rò điện (ELCB / RCBO) tiêu chuẩn an toàn trường học',
      'Hệ thống chia pha sạc tuần tự tránh quá tải nguồn điện lưới của trường',
      'Đèn LED báo trạng thái từng khoang sạc (Xanh: Đầy/Chờ - Đỏ: Đang sạc)'
    ],
    features: [
      'Tăng tuổi thọ pin Laptop/Tablet thêm 40% nhờ công nghệ ngắt thông minh chống chai phồng',
      'Ổ cắm chuyên dụng chịu nhiệt và chống cháy lan',
      'Khóa an toàn 2 tầng bảo vệ tài sản công khỏi nguy cơ thất thoát',
      'Bánh xe công nghiệp chịu tải 250kg có khóa hãm cố định, xoay 360 độ êm ái',
      'Hệ thống quạt làm mát đối lưu khí tự động kích hoạt theo nhiệt độ bên trong tủ',
      'Dây sạc được luồn ngầm trong các rãnh kỹ thuật, xóa bỏ hoàn toàn cảnh dây điện rối rắm'
    ],
    batteryProtection: 'Ngắt tự động + Kiểm soát dòng nạp giúp tăng tuổi thọ pin thiết bị 40%',
    image: 'cabinet-30',
    badge: 'Bán chạy nhất cho Trường học'
  },
  {
    id: 'smart-charge-40',
    name: 'Tủ sạc thông minh Smart-Charge SCE 40 Khay',
    capacity: '40 - 42 Laptop / Tablet / iPad',
    dimensions: 'Cao 1350mm x Rộng 950mm x Sâu 600mm',
    material: 'Thép mạ kẽm dập gân tăng cứng, sơn tĩnh điện sần cao cấp màu ghi/vàng kem theo chuẩn',
    electricalSafety: [
      'Timer kỹ thuật số lập trình chu kỳ sạc thông minh theo tiết học',
      'Chống sét lan truyền & chống xung điện áp đột ngột',
      'Aptomat chống giật tự động ngắt khi phát hiện dòng rò >30mA trong 0.03 giây',
      'Công tắc khẩn cấp bên ngoài tủ'
    ],
    features: [
      'Thiết kế 4 tầng chia ngăn chuyên dụng có đệm cao su chống trầy xước vỏ máy',
      'Quản lý tập trung 40 máy trong một diện tích sàn chỉ chưa đến 0.6m²',
      'Quạt thông gió kép êm ái không gây ồn trong không gian lớp học',
      'Tích hợp tay cầm trợ lực đẩy di chuyển giữa các phòng học bộ môn dễ dàng',
      'Bảo hành chính hãng 24 tháng cho phần cơ khí và 12 tháng cho hệ thống điều khiển điện'
    ],
    batteryProtection: 'Kiểm soát nhiệt độ khoang sạc, bảo vệ pin tuyệt đối khỏi nguy cơ cháy nổ',
    image: 'cabinet-40',
    badge: 'Dành cho Phòng học lớn & THPT/Đại học'
  }
];

export const UPGRADE_PACKAGES: UpgradePackage[] = [
  {
    id: 'package-standard-lab',
    title: 'Gói Nâng Cấp Tốc Độ Chuẩn Phòng Máy (SSD + RAM)',
    targetDevice: 'Phòng máy tính 25 - 50 máy tính để bàn (Dell/HP/Lenovo) đang chạy ổ HDD cũ',
    beforeStatus: 'Thời gian khởi động từ 5 - 10 phút; hay bị đơ treo máy; mở Word/Scratch giật lag; học sinh mất 15 phút đầu giờ chỉ để mở máy.',
    afterStatus: 'Khởi động máy thần tốc < 30 giây; mở ứng dụng tức thì; chạy mượt mà Scratch, Python, Office 2021, Photoshop cơ bản; tiết kiệm 100% thời gian tiết học.',
    components: [
      'Thay thế ổ HDD cũ bằng Ổ cứng thể rắn SSD SATA III / NVMe 240GB - 512GB chính hãng',
      'Nâng cấp dung lượng RAM lên 8GB - 16GB DDR3/DDR4 tương thích tối đa bo mạch',
      'Vệ sinh công nghiệp toàn bộ máy, thay keo tản nhiệt CPU cao cấp MX-4',
      'Cài đặt hệ điều hành Windows & Office bản quyền, tinh chỉnh tắt dịch vụ thừa',
      'Thiết lập phần mềm đóng băng ổ đĩa Deep Freeze / Tool bảo vệ dữ liệu trường học'
    ],
    estimatedCostPerUnit: 850000,
    savingsPercent: 85,
    highlight: 'Tiết kiệm tới ~350 triệu đồng so với việc đầu tư dàn 30 máy tính mới!'
  },
  {
    id: 'package-pro-lab',
    title: 'Gói Tối Ưu Toàn Diện & Hạ Tầng Mạng Phòng Tin Học',
    targetDevice: 'Phòng máy tính cần nâng cấp đồng bộ cả máy trạm lẫn hệ thống dây điện & switch mạng',
    beforeStatus: 'Máy chậm, dây mạng lộn xộn dưới chân bàn, ổ cắm lỏng lẻo dễ tóe lửa nguy hiểm.',
    afterStatus: 'Toàn bộ dàn máy chạy tốc độ cao, hệ thống dây điện - dây mạng được luồn máng gen âm an toàn, mạng LAN gigabit thông suốt.',
    components: [
      'Gói nâng cấp SSD + RAM + Keo tản nhiệt cho từng máy tính',
      'Bấm lại đầu cáp mạng Cat6 chuẩn AMP/CommScope, kiểm tra băng thông từng nút mạng',
      'Lắp đặt lại máng nẹp dây điện chống cháy, thay thế ổ cắm công nghiệp an toàn',
      'Tối ưu hóa Server máy giáo viên quản lý lớp học (NetSupport School / Mythware)'
    ],
    estimatedCostPerUnit: 1250000,
    savingsPercent: 78,
    highlight: 'Chuẩn hóa phòng tin học đạt tiêu chuẩn phòng học chất lượng cao của Sở GD&ĐT'
  }
];

export const HARDWARE_PRODUCTS: HardwareProduct[] = [
  {
    id: 'pc-dell-optiplex-edu',
    name: 'Máy tính đồng bộ thương hiệu Việt Nam VTB, Thánh Gióng',
    category: 'hardware',
    subCategory: 'desktop',
    estimatedPrice: 'Liên hệ dự toán',
    brand: 'VTB, Thánh Gióng',
    specs: {
      cpu: 'Intel Core i3 / i5 thế hệ mới',
      ram: '8GB / 16GB DDR4 bus 3200MHz',
      storage: 'SSD NVMe 256GB - 512GB siêu tốc',
      display: 'Màn hình 21.5" - 24" FHD IPS chống mỏi mắt',
      gpu: 'Intel UHD Graphics',
      ports: 'USB 3.2, HDMI, DisplayPort, LAN Gigabit',
      warranty: '24 - 36 tháng chính hãng tận nơi'
    },
    highlight: 'Độ bền vượt trội 24/7, tiêu thụ điện thấp, vỏ case nhỏ gọn tiết kiệm diện tích phòng máy.',
    tags: ['Phòng Tin Học', 'Doanh Nghiệp', 'Thương Hiệu Việt'],
    imageType: 'dell-optiplex'
  },
  {
    id: 'pc-hp-prodesk-edu',
    name: 'Máy tính Laptop, PC Hãng DELL, HP, ASUS, LENOVO, MSI',
    category: 'hardware',
    subCategory: 'desktop',
    estimatedPrice: 'Liên hệ dự toán',
    brand: 'DELL, HP, ASUS, LENOVO, MSI',
    specs: {
      cpu: 'Intel Core i5 / i7',
      ram: '16GB DDR4',
      storage: 'SSD 512GB PCIe M.2',
      display: 'Tùy chọn màn hình HP 24 inch tràn viền',
      gpu: 'Intel Graphics / Nvidia Quadro tùy chọn',
      warranty: '24 - 36 tháng tận nơi'
    },
    highlight: 'Tản nhiệt êm ái, hoạt động bền bỉ, thiết kế chống bụi công nghiệp.',
    tags: ['Văn Phòng', 'Phòng Lab', 'Bền Bỉ'],
    imageType: 'hp-prodesk'
  },
  {
    id: 'laptop-edu-lenovo',
    name: 'Laptop Giáo Dục Lenovo / Dell Chuyên Dụng Giáo Viên & Học Sinh',
    category: 'hardware',
    subCategory: 'laptop',
    estimatedPrice: 'Liên hệ dự toán',
    brand: 'Lenovo / Dell',
    specs: {
      cpu: 'Intel Core i3 / i5 / AMD Ryzen 5',
      ram: '8GB - 16GB RAM',
      storage: 'SSD 512GB',
      display: '14" - 15.6" FHD IPS chống chói',
      gpu: 'Đồ họa tích hợp tiết kiệm pin',
      warranty: '24 tháng'
    },
    highlight: 'Khung máy gia cố chống va đập, bàn phím chống tràn nước, thời lượng pin 8-10 tiếng.',
    tags: ['Giáo Viên', 'Lớp Học Thông Minh', 'Tủ Sạc SCE'],
    imageType: 'laptop-edu'
  },
  {
    id: 'ssd-upgrade-ram',
    name: 'Linh Kiện Nâng Cấp Chính Hãng',
    category: 'hardware',
    subCategory: 'component',
    estimatedPrice: 'Giá sỉ theo dự án',
    brand: 'Kingston, Crucial, Samsung, Kingmax',
    specs: {
      storage: 'SSD 2.5" SATA III 240GB/480GB & M.2 NVMe',
      ram: 'RAM DDR3/DDR4 4GB/8GB/16GB',
      warranty: '36 tháng 1 đổi 1'
    },
    highlight: 'Linh kiện chính hãng 100%, bảo hành đổi mới ngay lập tức, tương thích 100% mainboard cũ.',
    tags: ['Nâng Cấp', 'Chính Hãng', 'Bảo Hành 36T'],
    imageType: 'components'
  }
];

export const MAINTENANCE_SERVICES: MaintenanceService[] = [
  {
    id: 'service-cleaning',
    title: 'Vệ sinh công nghiệp phòng máy tính',
    stepNumber: 1,
    description: 'Thổi bụi toàn bộ quạt tản nhiệt, bo mạch chủ, bộ nguồn, lau chùi khe RAM và màn hình chuyên dụng.',
    details: [
      'Dùng máy thổi áp lực chuyên dụng làm sạch bụi bám lâu năm',
      'Lau sạch từng cánh quạt CPU, quạt nguồn và lưới tản nhiệt',
      'Vệ sinh chân cắm RAM, khe PCIe tránh tiếp xúc kém gây dump màn hình xanh',
      'Lau chùi khử khuẩn bề mặt bàn phím, chuột và màn hình lớp học'
    ],
    frequency: 'Mỗi 6 tháng / Lần',
    iconName: 'Sparkles'
  },
  {
    id: 'service-thermal',
    title: 'Thay keo tản nhiệt CPU cao cấp',
    stepNumber: 2,
    description: 'Làm sạch keo cũ bị khô cứng và tra keo dẫn nhiệt cao cấp Arctic MX-4 / Thermal Grizzly giúp hạ nhiệt 10-15°C.',
    details: [
      'Tẩy sạch keo tản nhiệt cũ bị khô chai trên mặt lưng CPU và đế đồng tản nhiệt',
      'Tra keo tản nhiệt công nghiệp chính hãng độ dẫn nhiệt cao',
      'Lắp đặt lại khóa chân tản nhiệt cân bằng áp lực tiếp xúc',
      'Giúp máy chạy êm, không bị sập nguồn do quá nhiệt trong mùa hè oi bức'
    ],
    frequency: 'Định kỳ hàng năm',
    iconName: 'Flame'
  },
  {
    id: 'service-electrical-lan',
    title: 'Kiểm tra an toàn hệ thống điện & Mạng nội bộ',
    stepNumber: 3,
    description: 'Rà soát toàn bộ đường dây điện, ổ cắm, tủ điện phòng máy và đường truyền cáp mạng LAN.',
    details: [
      'Đo điện áp, kiểm tra nguy cơ chập cháy tại các mối nối và ổ cắm lỏng lẻo',
      'Kiểm tra độ nhạy của cầu dao chống giật ELCB bảo vệ học sinh',
      'Bấm lại các đầu cáp mạng bị gãy lẫy, chập chờn tín hiệu',
      'Kiểm tra và cấu hình tối ưu Switch chia mạng, cân bằng tải Internet'
    ],
    frequency: 'Trước mỗi năm học mới',
    iconName: 'ShieldAlert'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-dh-su-pham',
    schoolName: 'Trường Đại Học Sư Phạm TP.HCM (HCMUE)',
    schoolType: 'Đại học',
    location: 'Quận 5, TP. Hồ Chí Minh',
    projectType: 'Trang bị Máy tính & Cấp phép Microsoft 365',
    description: 'Trang bị toàn diện hệ thống máy tính đồng bộ VTB, Thánh Gióng cho phòng thực hành tin học của Trung tâm Tin học ĐH Sư Phạm TP.HCM, kết hợp triển khai bản quyền Microsoft 365 Education.',
    metrics: [
      { label: 'Số lượng thiết bị', value: '120+ máy trạm' },
      { label: 'Cấp phép phần mềm', value: '150+ user' },
      { label: 'Độ ổn định hệ thống', value: '100% bảo hành tận nơi' }
    ],
    quote: 'Giải pháp của SCE giúp Trung tâm tối ưu hóa chi phí cực lớn, đảm bảo tính bản quyền và chất lượng phòng máy ổn định cho sinh viên.',
    tag: 'Đại Học Tiêu Biểu'
  },
  {
    id: 'case-thcs-ly-thanh-tong',
    schoolName: 'Trường THCS Lý Thánh Tông',
    schoolType: 'THCS',
    location: 'Quận 8, TP. Hồ Chí Minh',
    projectType: 'Phân phối Laptop Giáo viên & Thiết bị phòng máy',
    description: 'Cung cấp hàng loạt laptop tiêu chuẩn cho giáo viên và các máy tính desktop nhỏ gọn tiết kiệm không gian, đảm bảo hiệu suất giảng dạy và an toàn điện.',
    metrics: [
      { label: 'Thời gian triển khai', value: 'Trong vòng 48h' },
      { label: 'Phần mềm tích hợp', value: 'Windows 11 Pro' },
      { label: 'Bảo hành chính hãng', value: '36 tháng' }
    ],
    tag: 'THCS Tiêu Biểu'
  },
  {
    id: 'case-tieu-hoc-pham-van-chinh',
    schoolName: 'Trường Tiểu Học Phạm Văn Chính',
    schoolType: 'Tiểu học',
    location: 'Phường Linh Trung, TP. Thủ Đức, TP.HCM',
    projectType: 'Trang bị thiết bị phòng máy Stem',
    description: 'Cung cấp máy tính cấu hình cao và thiết bị hiển thị phục vụ phòng máy STEM, đáp ứng hoàn hảo yêu cầu thực hành và trải nghiệm phần mềm trực quan.',
    metrics: [
      { label: 'Tiêu chuẩn', value: 'Chuẩn GD STEM' },
      { label: 'Hỗ trợ kỹ thuật', value: '24/7' },
      { label: 'Thương hiệu', value: 'HP, Lenovo' }
    ],
    tag: 'Tiểu Học Tiêu Biểu'
  },
  {
    id: 'case-thcs-hong-bang',
    schoolName: 'Trường THCS Hồng Bàng',
    schoolType: 'THCS',
    location: 'Quận 5, TP. Hồ Chí Minh',
    projectType: 'Trang bị máy tính All-in-One & Office bản quyền',
    description: 'Triển khai máy tính All-in-One gọn gàng, hiện đại và cài đặt bản quyền Windows & Office phục vụ kỳ thi nghề và thi tin học trẻ cho 2 phòng máy vi tính.',
    metrics: [
      { label: 'Tiết kiệm không gian', value: 'Giảm 60% diện tích' },
      { label: 'Tỉ lệ sẵn sàng', value: '100% công suất' }
    ],
    tag: 'THCS Tiêu Biểu'
  }
];

export const CLIENT_SCHOOLS = [
  { name: 'Trường ĐH Sư Phạm TP.HCM', code: 'DHSP', desc: 'Đại học trọng điểm sư phạm miền Nam' },
  { name: 'Trường THCS Lý Thánh Tông', code: 'LTTONG', desc: 'Trường THCS Quận 8, TP.HCM' },
  { name: 'Trường Tiểu Học Phạm Văn Chính', code: 'PVCHINH', desc: 'Trường Tiểu học TP. Thủ Đức' },
  { name: 'Trường THCS Hồng Bàng', code: 'HBANG', desc: 'Trường THCS Quận 5, TP.HCM' },
  { name: 'Trường THCS Cát Lái', code: 'CLAI', desc: 'Trường THCS TP. Thủ Đức' },
  { name: 'Trường Tiểu Học Đức Lập Thượng B', code: 'DLTHUONG', desc: 'Đức Hòa, Long An' },
  { name: 'Trường Tiểu Học Tân Lập', code: 'TLAP', desc: 'Đồng Nai / TP.HCM' },
  { name: 'Trường THCS Trần Hưng Đạo', code: 'THDAO', desc: 'Trường THCS tiêu chuẩn' },
  { name: 'Trường Tiểu Học Nguyễn Huệ', code: 'NHUE', desc: 'Trường Tiểu Học Bến Thành' },
  { name: 'Trường Tiểu Học Nguyễn Thị Hạnh', code: 'NTHANH', desc: 'Trường Tiểu Học chuẩn quốc gia' },
  { name: 'Trường THCS Nguyễn Chí Thanh', code: 'NCTHANH', desc: 'Trường THCS Quận 12' },
  { name: 'Trường THCS Thạnh Mỹ Lợi', code: 'TMLOI', desc: 'Trường THCS Quận 2 / TP. Thủ Đức' },
  { name: 'Trường THCS Cần Thạnh', code: 'CTHANH', desc: 'Huyện Cần Giờ, TP.HCM' },
  { name: 'Trường Tiểu Học Thạnh An', code: 'THAN', desc: 'Xã đảo Thạnh An, Cần Giờ' },
  { name: 'Trường THCS Lý Phong', code: 'LPHONG', desc: 'Phường An Đông, Quận 5' },
  { name: 'Trường THCS Trần Quốc Toản', code: 'TQTOAN', desc: 'Trường THCS tiêu chuẩn chất lượng' },
  { name: 'Tập Đoàn Vina 1D', code: 'VINA1D', desc: 'Doanh nghiệp đối tác thiết bị' }
];

export const PARTNERS: Partner[] = [
  { name: 'Google for Education', category: 'Công nghệ', role: 'Giải pháp học tập số và công cụ giáo dục thông minh', logoText: 'Google for Education' },
  { name: 'AI Education', category: 'Công nghệ', role: 'Nền tảng trí tuệ nhân tạo tích hợp trong dạy và học', logoText: 'AI Education' },
  { name: 'Hòa Phát (Sách & TBGD)', category: 'Hạ tầng', role: 'Công ty CP Sách và Thiết bị Giáo dục Hòa Phát', logoText: 'GD Hòa Phát' },
  { name: 'Nam & Co. London', category: 'Hạ tầng', role: 'Đối tác thiết kế & sản xuất cơ khí chính xác', logoText: 'NAM & Co.' },
  { name: 'KETA Educational', category: 'Hạ tầng', role: 'Mở khóa tiềm năng thế hệ trẻ - Unlock Youth Potential', logoText: 'KETA' },
  { name: 'Trường ĐH Sư Phạm TP.HCM', category: 'Giáo dục', role: 'Hợp tác nghiên cứu thực nghiệm phòng máy sư phạm', logoText: 'ĐH Sư Phạm TP.HCM' },
  { name: 'Rồng Việt Education', category: 'Giáo dục', role: 'Hệ sinh thái đào tạo kỹ năng & công nghệ trường học', logoText: 'Rồng Việt' },
  { name: 'Gara STEM', category: 'Giáo dục', role: 'Hạ tầng & giải pháp giáo dục STEM ứng dụng', logoText: 'Gara STEM' }
];
