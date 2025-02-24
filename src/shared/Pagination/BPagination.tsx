import { Form, Pagination } from 'antd';
import React from 'react';
type TBPagination = {
  totalCount: number;
  setParams: React.Dispatch<React.SetStateAction<{page:number, limit:number}>>;
  params: {limit: number, page:number}

};
export default function BPagination({
  totalCount,
  setParams,
  params
}: TBPagination) {
   const handleFinished = (values: any) => {
    setParams((prev) =>  ({ ...prev, ...values }))
    }
  
    
  return (
    <div className='pagination-search mt-4'>
      <Form.Item noStyle shouldUpdate>
        {() => {
          return (
            <Pagination
              current={params?.page}
              total={totalCount}
              pageSize={params?.limit}
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



