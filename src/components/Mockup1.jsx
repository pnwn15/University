import React from 'react';
import { Table } from 'antd';

const MockupComponent = () => {
    // ข้อมูลอัตราค่าธรรมเนียม
    const columns = [
        {
            title: 'หอพัก',
            dataIndex: 'dorm',
            key: 'dorm',
        },
        {
            title: 'เทอม 1',
            dataIndex: 'term1',
            key: 'term1',
        },
        {
            title: 'เทอม 2',
            dataIndex: 'term2',
            key: 'term2',
        },
        {
            title: 'เทอม 3',
            dataIndex: 'term3',
            key: 'term3',
        },
    ];

    const data = [
        // ข้อมูลหอพักในสงขลา
        {
            dorm: 'ปาริชาต 1 (หอพักชาย)',
            term1: '4,200',
            term2: '3,200',
            term3: '1,600',
        },
        {
            dorm: 'ปาริชาต 2 (หอพักหญิง)',
            term1: '4,200',
            term2: '3,200',
            term3: '1,600',
        },
        {
            dorm: 'ปาริชาต 3 (หอพักหญิง)',
            term1: '5,000',
            term2: '4,000',
            term3: '2,000',
        },
        // ข้อมูลหอพักในพัทลุง
        {
            dorm: 'พะยอม 1 (หอพักหญิง)',
            term1: '3,600',
            term2: '2,600',
            term3: '1,300',
        },
        {
            dorm: 'พะยอม 2 (หอพักหญิง)',
            term1: '3,600',
            term2: '2,600',
            term3: '1,300',
        },
        {
            dorm: 'พะยอม 3 (หอพักหญิง)',
            term1: '3,600',
            term2: '2,600',
            term3: '1,300',
        },
        {
            dorm: 'อินทนิล 2 (หอพักชาย)',
            term1: '3,600',
            term2: '2,600',
            term3: '1,300',
        },
        {
            dorm: 'อินทนิล 3 (หอพักชาย)',
            term1: '3,600',
            term2: '2,600',
            term3: '1,300',
        },
        {
            dorm: 'อินทนิล 4 (หอพักชาย)',
            term1: '3,600',
            term2: '2,600',
            term3: '1,300',
        },
        {
            dorm: 'อินทนิล 5 (หอพักชาย)',
            term1: '3,600',
            term2: '2,600',
            term3: '1,300',
        },
        {
            dorm: 'อินทนิล 6 (หอพักหญิง)',
            term1: '3,600',
            term2: '2,600',
            term3: '1,300',
        },
    ];

    return (
        <div className='border border-[#32C5D2]' style={{ margin: '20px' }}>
            <div className='bg-[#32C5D2] text-white text-2xl p-3'>
                <h2>อัตราค่าธรรมเนียมหอพัก</h2>
            </div>
            <Table columns={columns} dataSource={data} rowKey="dorm" />
        </div>
    );
};

export default MockupComponent;
