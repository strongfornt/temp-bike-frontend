import { Form, Pagination } from 'antd';
import React from 'react';
type TBPagination = {
  totalCount: number;
  setParams: React.Dispatch<React.SetStateAction<object>>;
  params: any

};
export default function BPagination({
  totalCount,
  setParams,
  params
}: TBPagination) {
   const handleFinished = (values: any) => {
    setParams((prev) =>  ({ ...prev, values }))
    }
  return (
    <div className='pagination-search'>
      <Form.Item noStyle shouldUpdate>
        {() => {
          return (
            <Pagination
              current={params?.pageNumber}
              total={totalCount}
              pageSize={params?.pageSize}
              onChange={(value: number, size: number) => {
                handleFinished({
                  page: value,
                  limit: size,
                })
              }}
              pageSizeOptions={['5','10', '30', '50', '100']}
              showSizeChanger={true}
              className="w-full flex justify-center my-5"
            />
          );
        }}
      </Form.Item>
    </div>
  );
}



