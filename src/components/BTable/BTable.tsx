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

// import { Row, Switch, Table } from 'antd';
// import React, { useEffect, useState } from 'react';
// import './BTable.scss';
// import FilterColumn from './TableFilterColumn/FilterColumn';

// type paramType = {
//   title?: string | React.ReactElement;
//   header: object[];
//   rowData: object[];
//   className?: 'coloredTable' | string;
//   loading?: boolean;
//   customScrollBar?: 'thin';
//   rowClass?: (record: any, index: number) => any | string;
//   rowSelection?: {
//     isActive?: boolean;
//     type?: 'checkbox' | 'radio';
//     hideSelectAll?: boolean;
//     onChange?: (selectedRowKeys: any, selectedRows: any) => any;
//     getCheckboxProps?: (record: any) => any;
//     selectedRowKeys?: string[] | number[];
//     onSelect?: (
//       record: any,
//       selected: any,
//       selectedRows: any,
//       nativeEvent: any
//     ) => any;

//     onSelectAll?: (selected: any, selectedRows: any, changeRows: any) => any;
//     checkStrictly?: boolean;
//     selections?: [] | boolean;
//     render?: (
//       checked: boolean,
//       record: any,
//       index: number,
//       originNode: React.ReactNode
//     ) => any;
//   };
//   scroll?: object;
//   onHeaderRow?: (
//     record: any,
//     rowIndex: any
//   ) => {
//     onClick?: (event: any) => any;
//     onMouseEnter?: (event: any) => any;
//     onMouseLeave?: (event: any) => any;
//     className?: 'lightBlue' | string;
//   };
//   onRow?: (
//     record: any,
//     rowIndex: any
//   ) => {
//     onClick?: (event: any) => any;
//     onMouseEnter?: (event: any) => any;
//     onMouseLeave?: (event: any) => any;
//   };
//   pagination?: boolean;
//   filterColumn?: boolean;
//   components?: any;
//   onChange?: (pagination: any, filters: any, sorter: any) => any;
//   summary?: (data: any) => any;
//   headerTitle?: (data: any) => any;
//   bordered?: boolean;
//   isPrint?: boolean;
//   footer?: (data: any) => any;
//   expandable?: {
//     expandedRowRender?: (record: any) => any;
//     rowExpandable?: (record: any) => boolean;
//     defaultExpandAllRows?: boolean;
//     defaultExpandedRowKeys?: string[];
//     expandedRowClassName?: (record: any, index: number, indent: any) => string;
//     expandRowByClick?: boolean;
//     showExpandColumn?: boolean;
//     onExpand?: (expanded: any, record: any) => any;
//     onExpandedRowsChange?: (expandedRows: any) => any;
//     expandedRowKeys?: string[];
//   };
// };

// export const BTable: React.FC<paramType> = ({
//   title,
//   header,
//   rowData,
//   className,
//   loading,
//   rowClass,
//   rowSelection,
//   scroll,
//   onHeaderRow,
//   onRow,
//   filterColumn,
//   components,
//   onChange,
//   summary,
//   headerTitle,
//   bordered,
//   isPrint,
//   footer,
//   customScrollBar,
//   expandable,
// }) => {
//   const data: any = rowData;
//   const [headerData, setHeaderData] = useState<any>([]);
//   const [columnList, setColumnList] = useState<any>();

//   const addRemoveColumn = (item: any, boolean: boolean, index: number) => {
//     const data = [...headerData];
//     data[index].hidden = !boolean;
//     setHeaderData(data);
//     const copyColumnList = [...columnList];
//     copyColumnList[index].isActive = boolean;
//     setColumnList(copyColumnList);
//   };

//   useEffect(() => {
//     setHeaderData(
//       header?.map((item: any) => ({
//         ...item,
//       }))
//     );
//     setColumnList(
//       header.map(({ isColFixed, title }: any) => ({
//         title,
//         isColFixed,
//         isActive: true,
//       }))
//     );
//   }, [header]);

//   return (
//     <>
//       {filterColumn && (
//         <div className="px-5 py-3">
//           <Row gutter={[10, 2]}>
//             <FilterColumn>
//               <div className="list">
//                 {columnList?.map((item: any, index: number) => {
//                   return (
//                     !item.isColFixed && (
//                       <div key={index} className="flex items-center gap-2 m-2">
//                         <Switch
//                           checked={item?.isActive}
//                           onChange={(boolean) => {
//                             addRemoveColumn(item, boolean, index);
//                           }}
//                         />
//                         <p className="cursor-pointer text-xs">{item?.title}</p>
//                       </div>
//                     )
//                   );
//                 })}
//               </div>
//             </FilterColumn>
//           </Row>
//         </div>
//       )}
//       <div
//         // className={`data_table ${className ? className : ''} ${
//         //   isPrint ? 'printTable' : ''
//         // } ${customScrollBar === 'thin' ? 'scroll_bar_thin' : 'scroll_bar_thin'}${
//         //   !data?.length ? 'hidden_scroolbar' : ''
//         // }`}
//         className={`data_table ${className ? className : ''} scroll_bar_thin`}
//       >
//         {title && <h6 className="table_title">{title}</h6>}
//         <Table
//           bordered={bordered}
//           title={headerTitle}
//           columns={
//             filterColumn
//               ? headerData.filter((item: any) => !item?.hidden)
//               : header
//           }
//           dataSource={data}
//           loading={loading}
//           rowClassName={
//             rowClass
//               ? (record: any, i: number) => {
//                   let rowClassName = rowClass(record, i);
//                   if (record?.isUnApprove) {
//                     rowClassName += ' revised_row';
//                   }

//                   return rowClassName;
//                 }
//               : (record: any) => {
//                   if (record?.isUnApprove) {
//                     return ' revised_row';
//                   }
//                 }
//           }
//           rowSelection={
//             rowSelection &&
//             (rowSelection?.isActive || rowSelection?.isActive === undefined)
//               ? rowSelection
//               : undefined
//           }
//           scroll={
//             isPrint ? { x: 'auto', y: undefined } : scroll ? scroll : { y: 465 }
//           }
//           onHeaderRow={onHeaderRow ? onHeaderRow : undefined}
//           onRow={onRow ? onRow : undefined}
//           components={components}
//           onChange={onChange}
//           summary={summary}
//           pagination={false}
//           footer={footer}
//           expandable={expandable}
//           rowKey={(record) => record?.key}
//         />
//       </div>
//     </>
//   );
// };
// export default BTable;
