import React from "react";
import { Table } from "antd";

interface BTableProps {
    columns: any[];
    dataSource: any[];
    rowKey?: string;
    isBorder?: boolean,
    isLoading?:boolean,
}

const BTable: React.FC<BTableProps> = ({ columns, dataSource, rowKey = "key", isBorder, isLoading }) => {
    return <Table columns={columns} dataSource={dataSource} rowKey={rowKey} pagination={false} bordered={isBorder} loading={isLoading}/>;
};

export default BTable;