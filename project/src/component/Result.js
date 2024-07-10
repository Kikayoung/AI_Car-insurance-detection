import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { useNavigate } from 'react-router-dom';

const Result = () => {
  const navigate = useNavigate();
  const Value = 20;

  const data = [
    { title: 'Yellow', value: Value, color: '#3A5AFE' }, // 노란색으로 채워질 부분
    { title: 'Gray', value: 100 - Value, color: '#d9d9d9' } // 회색으로 채워질 부분
  ];

  const handleHomeClick = () => {
    navigate('/home');
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Fraud Reported</h2>
      <div style={{ display: 'inline-block', position: 'relative' }}>
        <PieChart
          data={data}
          totalValue={100} // 전체 값
          lineWidth={50} // 도넛의 두께
          startAngle={270} // 시작 각도 (기본값: 0)
          animate // 애니메이션 효과 (기본값: true)
          animationDuration={500} // 애니메이션 지속 시간 (기본값: 1000ms)
          label={() => null} // 라벨 표시하지 않음
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#3A5AFE' // 텍스트 색상을 노란색으로 설정
          }}
        >
          {Value}%
        </div>
        <button type="button" className="btn-home" style={{ backgroundColor: '#D5E5FF', color: '#344BFD', border: 'none', padding: '10px 20px', marginTop: '20px', cursor: 'pointer' }}>Detail</button>
      </div>
      <button type="button" className="home-button"onClick={handleHomeClick}>Home</button>
    </div>
  );
}

export default Result;
