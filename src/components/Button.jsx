
import { DownloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';


const ButtonComponent = () => {
    return (
        <Button
            type="primary"
            icon={<DownloadOutlined />}
            size="large"
            style={{
                backgroundColor: '#32C5D2', // กำหนดสีของปุ่ม
                color: 'white', // กำหนดสีข้อความ
                padding: '20px 100px',
                fontSize: '18px',
                display: 'flex',
                justifyContent: 'space-between'
            }}
        >
            ตรวจสอบห้องว่าง
        </Button>

  )
}

export default ButtonComponent