import React, { useState } from 'react'

const Formlogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();

        // ตรวจสอบว่า 'ชื่อผู้ใช้' และ 'รหัสผ่าน' มีค่า
        if (!username || !password) {
            setError('กรุณากรอกชื่อผู้ใช้และรหัสผ่าน');
            return;
        }

        // ตรวจสอบรูปแบบของชื่อผู้ใช้ (ตัวอย่าง: ต้องเป็นอีเมล)
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(username)) {
            setError('โปรดกรอกอีเมลที่ถูกต้อง');
            return;
        }

        // ถ้าผ่านการตรวจสอบ
        setError('');
        // ทำการ submit form หรืออื่นๆ ตามที่ต้องการ
        console.log('Form submitted');
    };
    return (

        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            {error && <div className="text-red-600">{error}</div>}
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ชื่อผู้ใช้ (หรือ หมายเลขโทรศัพท์)</label>
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="กรอกชื่อผู้ใช้หรือหมายเลขโทรศัพท์"
                />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">รหัสผ่าน</label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="••••••••"
                />
            </div>

            <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Sign in
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?
                <a href="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
            </p>
        </form>

    )
}

export default Formlogin