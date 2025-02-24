import React from "react";
import { Table } from "antd";
import './BTable.scss'
interface BTableProps {
  columns: any[];
  dataSource: any[];
  rowKey?: string;
  isBorder?: boolean;
  isLoading?: boolean;
  scroll?:object
}

const BTable: React.FC<BTableProps> = ({
  columns,
  dataSource,
  rowKey = "key",
  isBorder,
  isLoading,
  scroll
}) => {
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      rowKey={rowKey}
      pagination={false}
      bordered={isBorder}
      scroll={scroll ? scroll : { y: 440 }}
      loading={isLoading}
    />
  );
};

export default BTable;
