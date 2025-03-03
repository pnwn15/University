
import { FaBell, FaRegCalendarAlt, FaFileAlt } from 'react-icons/fa';
const newsList = [
    { text: 'ประกาศมหาวิทยาลัยทักษิณ เรื่อง การจองหอพัก นิสิตชั้นปีที่ 2 ขึ้นไป ประจำภาคเรียนที่ 1 ปีการศึกษา 2568', icon: <FaBell /> },
    { text: 'เรื่อง การจองหอพัก นิสิตชั้นปีที่ 1 มหาวิทยาลัยทักษิณ ประจำภาคเรียนที่ 1 ปีการศึกษา 2568', icon: <FaRegCalendarAlt /> },
    { text: 'เรื่อง การจองหอพัก นิสิตชั้นปีที่ 2 ขึ้นไป มหาวิทยาลัยทักษิณ ประจำภาคเรียนที่ 1 ปีการศึกษา 2568', icon: <FaBell /> },
    { text: 'หลักเกณฑ์และวิธีการจัดสรรหอพักนิสิต สำหรับนิสิตชั้นปีที่ 2 ขึ้นไป มหาวิทยาลัยทักษิณ', icon: <FaFileAlt /> },
    { text: 'แบบฟอร์มขออนุญาตเข้า – ออกหอพักนอกเวลาที่กำหนด', icon: <FaFileAlt /> },
    { text: 'ประกาศมหาวิทยาลัยทักษิณ เรื่อง ปฏิทินหอพัก ภาคเรียนที่ 2 ปีการศึกษา 2567', icon: <FaRegCalendarAlt /> },
    { text: 'ประกาศมหาวิทยาลัยทักษิณ เรื่อง การจองหอพัก นิสิตชั้นปีที่ 2 ขึ้นไป ประจำภาคเรียนที่ 1 ปีการศึกษา 2568', icon: <FaBell /> },
    { text: 'เรื่อง การจองหอพัก นิสิตชั้นปีที่ 1 มหาวิทยาลัยทักษิณ ประจำภาคเรียนที่ 1 ปีการศึกษา 2568', icon: <FaRegCalendarAlt /> },
    { text: 'หลักเกณฑ์และวิธีการจัดสรรหอพักนิสิต สำหรับนิสิตชั้นปีที่ 2 ขึ้นไป มหาวิทยาลัยทักษิณ', icon: <FaFileAlt /> },
    { text: 'เรื่อง กำหนดระยะเวลาการชำระเงินค่าน้ำประปาและค่าไฟฟ้า หอพักนิสิตพยาบาล มหาวิทยาลัยทักษิณ วิทยาเขตพัทลุง ประจำภาคเรียนที่ 2 ปีการศึกษา 2567', icon: <FaBell /> },
    { text: 'แบบฟอร์มขออนุญาตเข้า – ออกหอพักนอกเวลาที่กำหนด', icon: <FaFileAlt /> },
    { text: 'ประกาศมหาวิทยาลัยทักษิณ เรื่อง ปฏิทินหอพัก ภาคเรียนที่ 2 ปีการศึกษา 2567', icon: <FaRegCalendarAlt /> },
    { text: 'ประกาศคณะกรรมการการเงินและทรัพย์สิน เรื่อง ยกเว้นค่าธรรมเนียมหอพักนิสิตภายในวิทยาเขตพัทลุง พ.ศ. 2567', icon: <FaBell /> },
    { text: 'แบบฟอร์มการใช้ห้องพักรายวัน (เรือนรับรอง)', icon: <FaFileAlt /> },
    { text: 'ประกาศ กำหนดระยะเวลาการชำระเงินค่าน้ำประปาและค่าไฟฟ้าหอพักนิสิต ประจำภาคเรียนที่ 1 ปีการศึกษา 2566', icon: <FaBell /> },
    { text: 'ประกาศ การขยายเวลาชำระเงินค่าบำรุงหอพักและค่าประกันของเสียหายหอพัก ประจำภาคเรียนที่ 1 ปีการศึกษา 2566', icon: <FaFileAlt /> },
    { text: 'แบบบันทึกข้อตกลงการชำระหนี้ค่าบำรุงหอพัก', icon: <FaFileAlt /> },
    { text: 'ประกาศการจัดเก็บค่าธรรมเนียมหอพักฉบับใหม่(เริ่มใช้ปีการศึกษา2566เป็นต้นไป)', icon: <FaBell /> },
    { text: 'แบบขอย้ายหอพัก', icon: <FaFileAlt /> },
    { text: 'แบบบันทึกการลาออกจากหอพัก', icon: <FaFileAlt /> },
    { text: 'แบบบันทึกจองหอพัก-สำหรับนิสิตที่ไม่ได้จองหอพักตามมหาวิทยาลัยประกาศกำหนด', icon: <FaBell /> },
    { text: 'แบบคำร้อง-ขอเบิกเงินค่าประกันของเสียหายหอพัก', icon: <FaFileAlt /> },
];

const Mockup = () => {
    return (
        <div className="p-6 rounded-lg">
            <div className="border-b-2 mt-5 border-black pb-2">
                <h1 className="text-2xl">ข่าวประชาสัมพันธ์</h1>
            </div>
            <div className='mt-3'>
            <h2 className="text-sm  mb-4 ">ข่าวจากหอพักวิทยาเขตสงขลา</h2>
            <div className="space-y-3">
                {newsList.map((news, index) => (
                    <div key={index} className=" transition-all border-b-1 duration-300 flex items-center">
                        <div className="mr-3 text-blue-500">{news.icon}</div>
                        <p className="text-sm text-gray-700">{news.text}</p>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
};

export default Mockup;
