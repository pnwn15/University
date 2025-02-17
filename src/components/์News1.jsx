import React from 'react'
import ButtonComponent from './Button';

const News1 = () => {
    const songkhlaEvents = [
        { id: 1, date: '05/10/2567 - 06/10/2567', activity: 'นิสิตจองหอพัก online' },
        { id: 2, date: '02/10/2567 - 31/01/2568', activity: 'ยกเลิกจอง/ย้ายห้อง/เพิ่มนิสิตห้องพัก โดยแจ้งที่ปรึกษาหอพัก' },
        { id: 3, date: '02/10/2567 - 15/12/2567', activity: 'พิมพ์ใบแจ้งยอดการชำระเงิน' },
        { id: 4, date: '02/10/2567 - 15/12/2567', activity: 'ชำระเงินผ่านธนาคาร' },
    ];

    const phatthalungEvents = [
        { id: 1, date: '08/10/2567 - 09/10/2567', activity: 'นิสิตจองหอพัก online' },
        { id: 2, date: '18/12/2567 - 23/01/2568', activity: 'ยกเลิกจอง/ย้ายห้อง/เพิ่มนิสิตห้องพัก โดยแจ้งที่ปรึกษาหอพัก' },
        { id: 3, date: '03/12/2567', activity: 'พิมพ์ใบแจ้งยอดการชำระเงิน' },
        { id: 4, date: '03/12/2567', activity: 'ชำระเงินผ่านธนาคาร' },
        { id: 5, date: '05/02/2568 - 14/02/2568', activity: 'บันทึกค่าน้ำประปา ค่าไฟฟ้า' },
        { id: 6, date: '15/02/2568 - 21/02/2568', activity: 'พิมพ์ใบแจ้งยอดการชำระเงิน ค่าน้ำประปา ค่าไฟฟ้า' },
        { id: 7, date: '15/02/2568 - 21/02/2568', activity: 'ชำระเงินค่าน้ำประปา ค่าไฟฟ้า ผ่านธนาคาร' },
    ];
  return (
      <div className=" p-2  rounded-lg">
          <div className="border-b-2 mt-5 border-gray-500 pb-2">
              <h1 className="text-2xl">ปฏิทินหอพักนิสิต ปีการศึกษา 2567/2</h1>
          </div>

          {/* Songkhla Campus Calendar */}
          <h3 className="text-md  mb-3">วิทยาเขตสงขลา</h3>
          <table className="min-w-full table-auto mb-6 border-collapse">
              <thead>
                  <tr>
                      <th className="py-2 px-4 border-b text-start">#</th>
                      <th className="py-2 px-4 border-b text-start">วันที่</th>
                      <th className="py-2 px-4 border-b text-start">กิจกรรม</th>
                  </tr>
              </thead>
              <tbody>
                  {songkhlaEvents.map(event => (
                      <tr key={event.id} className="hover:bg-gray-100">
                          <td className="py-2 px-4 border-b">{event.id}</td>
                          <td className="py-2 px-4 border-b">{event.date}</td>
                          <td className="py-2 px-4 border-b">{event.activity}</td>
                      </tr>
                  ))}
              </tbody>
          </table>

          {/* Phatthalung Campus Calendar */}
          <h3 className="text-md mb-3 ">วิทยาเขตพัทลุง</h3>
          <table className="min-w-full table-auto">
              <thead>
                  <tr>
                      <th className="py-2 px-4 border-b text-start">#</th>
                      <th className="py-2 px-4 border-b text-start">วันที่</th>
                      <th className="py-2 px-4 border-b text-start">กิจกรรม</th>
                  </tr>
              </thead>
              <tbody>
                  {phatthalungEvents.map(event => (
                      <tr key={event.id} className="hover:bg-gray-100">
                          <td className="py-2 px-4 border-b">{event.id}</td>
                          <td className="py-2 px-4 border-b">{event.date}</td>
                          <td className="py-2 px-4 border-b">{event.activity}</td>
                      </tr>
                  ))}
              </tbody>
          </table>
          <div className="flex justify-end mt-4">
              <ButtonComponent />
          </div>

      </div>
  )
}

export default News1