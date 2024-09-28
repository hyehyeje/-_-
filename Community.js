import React, { useState } from 'react';
import styled from 'styled-components';
import CommunityContent from './CommunityContent';  // Community 탭 내용
import InformationContent from './InformationContent';  // Information 탭 내용

const Community = () => {
  // 현재 활성화된 탭을 관리하는 상태
  const [activeTab, setActiveTab] = useState('목표 인증');

  return (
    <CommunityContainer>
      <TabWrapper>
        <TabNavigation>
          <TabButton 
            active={activeTab === '목표 인증'} 
            onClick={() => setActiveTab('목표 인증')}
          >
            목표 인증
          </TabButton>
          <TabButton 
            active={activeTab === '정보 공유'} 
            onClick={() => setActiveTab('정보 공유')}
          >
            정보 공유
          </TabButton>
        </TabNavigation>
      </TabWrapper>

      {/* 선택된 탭에 따라 다른 컴포넌트 렌더링 */}
      <ContentWrapper>
        {activeTab === '목표 인증' && <CommunityContent />}
        {activeTab === '정보 공유' && <InformationContent />}
      </ContentWrapper>
    </CommunityContainer>
  );
};

export default Community;

// 스타일 컴포넌트
const CommunityContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
`;

const TabWrapper = styled.div`
  background-color: #eaeaea; /* 상단 배경색 */
  padding: 0px;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const TabNavigation = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 500px;
`;

const TabButton = styled.button`
  flex: 1;  /* 탭이 부모 요소를 균등하게 차지하게 함 */
  padding: 10px 0;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  background-color: ${({ active }) => (active ? '#ffffff' : '#dddddd')};
  color: ${({ active }) => (active ? 'black' : '#777')};
  border: none;
  border-radius: 10px 10px 0 0; /* 곡선 */
  margin: 0 5px; /* 탭 사이 간격 */
  box-shadow: ${({ active }) => (active ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none')};
  &:hover {
    background-color: ${({ active }) => (active ? '#ffffff' : '#eeeeee')};
  }
`;

const ContentWrapper = styled.div`
  padding: 20px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 0 0 10px 10px; /* 하단 곡선 */
`;
