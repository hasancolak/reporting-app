import "./Reports.scss";
import React from 'react';
import { Button } from "../Button/Button";
import { Text } from '../Text/Text';
import { IReport } from '../../interface/Reports.interface';
import { useReports } from "../../hooks/reports.hooks";


/**
 * @description Reports component
 * @returns React Jsx.Element
 */
const Reports = () => {
  const {reports, resolver, blocker} = useReports();
  
  const onResolveClickHandle = (e:any) => {
    resolver(e.target.value);
  };
 
  const onBlockClickHendle = (e:any) => {
    blocker(e.target.value);
  };


  return (
      <div className="report">
        {
          reports?.map((item: IReport) => {
            return (
              <div className={`report__item ${item.isBlocked ? "blocked" : "" }`}  key={item.id}>
                <div className="report__item__left">
                    <Text key={item.id} id={item.id} state={item.state} type={item.type} message={item.message}></Text>
                </div>
                <div className="report__item__right" hidden={item.isBlocked}>
                  <Button text="Block" onClick={onBlockClickHendle} value={item.id}></Button>
                  <Button text="Resolve" onClick={onResolveClickHandle} value={item.id}></Button>
                </div>
              </div>                
            );
          })
        }
      </div>
  );
};

export { Reports };