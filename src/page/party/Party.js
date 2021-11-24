import React from 'react';
import './party.css'

const Party = () => {
    return (
        <div class="party">
            <div class="party-main">
                <div class="party-main__box party-main__box-option">
                    <select name='' class="party-main__box-option-select">
                        <option value='all' selected>카테고리 선택</option>
                        <option value='1'>군단장 레이드</option>
                        <option value='2'>어비스 레이드</option>
                        <option value='3'>어비스 던전</option>
                        <option value='4'>집 가고싶다</option>
                    </select>
                    <select name='' class="party-main__box-option-select">
                        <option value='all' selected>컨텐츠 선택</option>
                        <option value='1'>부활한 마수의 심장</option>
                        <option value='2'>목마른 쾌락의 정원</option>
                        <option value='3'>한밤중의 서커스</option>
                        <option value='4'>몽환의 아스텔지어</option>
                    </select>
                    <select name='' class="party-main__box-option-select">
                        <option value='all' selected>난이도 선택</option>
                        <option value='1'>노말</option>
                        <option value='2'>하드</option>
                        <option value='3'>헬</option>
                    </select>
                    <input type="text" name="search" class="party-main__box-option-search" placeholder="검색어를 입력해주세요." />
                </div>
                <div class="party-main__box party-main__box-character">캐릭터</div>
                <div class="party-main__box party-main__box-list">
                    <div class="party-main__box-list-party">
                        <div class="party-main__box party-main__box-party">파티1</div>
                        <div class="party-main__box party-main__box-party">파티2</div>
                        <div class="party-main__box party-main__box-party">파티3</div>
                        <div class="party-main__box party-main__box-party">파티4</div>
                        <div class="party-main__box party-main__box-party">파티5</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Party;
