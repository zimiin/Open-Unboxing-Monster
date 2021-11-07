import { ArchiveItemType } from "../components/pages/ArchivePage";
import { BoxWithItems, OpenResult } from "../constants/types";

const cuChocoBox: BoxWithItems = {
  id: 93,
  title: "CU가서 당충전 박스",
  price: 1100,
  image: "https://www.officecon.co.kr/common/file/download?uploadFullPath=/product/20210224/20210224143056_242f32d2-1057-4cc5-9d1c-1c1f7058f6af.jpg",
  isLocal: false,
  detail: "당충전이 필요할때!🍫🍪🍭</br>CU가서 당충전 박스😋",
  ownerId: "k1912476571",
  sales: 6,
  isManager: true,
  items: [
    {
      id: 468,
      productId: "0000002695",
      seller: 1,
      title: "롯데)크런키초콜릿",
      price: 1000,
      image: "https://www.officecon.co.kr/common/file/download?uploadFullPath=/product/20210224/20210224143056_242f32d2-1057-4cc5-9d1c-1c1f7058f6af.jpg",
      detail: "<p>[이용안내]         <p>          ※&nbsp;오피스콘&nbsp;상품&nbsp;주문시&nbsp;유의사항<br>■&nbsp;1회&nbsp;주문시&nbsp;최대&nbsp;발송&nbsp;가능한&nbsp;수량은&nbsp;1건&nbsp;부터&nbsp;~&nbsp;1,000건&nbsp;까지&nbsp;입니다.<br>■&nbsp;동일한&nbsp;휴대폰번호&nbsp;또는&nbsp;이메일&nbsp;주소&nbsp;발송은&nbsp;ID별&nbsp;최대&nbsp;5개&nbsp;까지만&nbsp;발송&nbsp;가능&nbsp;합니다.<br>■&nbsp;주문&nbsp;일시기준&nbsp;30일&nbsp;이내&nbsp;동일한&nbsp;휴대폰번호&nbsp;또는&nbsp;이메일&nbsp;주소&nbsp;로&nbsp;30회&nbsp;이상&nbsp;발송&nbsp;이력&nbsp;발생시&nbsp;주문&nbsp;불가&nbsp;수신정보&nbsp;리스트에&nbsp;자동&nbsp;등록&nbsp;되어&nbsp;해당&nbsp;수신정보로&nbsp;주문&nbsp;및&nbsp;발송&nbsp;불가&nbsp;합니다.<br>■&nbsp;프로모션(B2B)&nbsp;발송상품으로&nbsp;유효기간&nbsp;연장&nbsp;및&nbsp;환불&nbsp;불가&nbsp;합니다.<br>■&nbsp;시세&nbsp;차익을&nbsp;목적으로&nbsp;사용처에서&nbsp;구매하는&nbsp;경우&nbsp;주문취소&nbsp;및&nbsp;서비스이용이&nbsp;제한될&nbsp;수&nbsp;있습니다.<br><br>▶상품설명&nbsp;<br>-&nbsp;전국&nbsp;CU&nbsp;매장에서&nbsp;상품교환이&nbsp;가능한&nbsp;모바일교환권입니다.&nbsp;(일부매장제외)<br><br>▶유의사항&nbsp;<br>일부&nbsp;특수점포에서는&nbsp;교환권&nbsp;사용이&nbsp;불가&nbsp;할&nbsp;수&nbsp;있습니다.<br>번호이동&nbsp;불가&nbsp;및&nbsp;유효기간&nbsp;만료이후&nbsp;사용이&nbsp;불가합니다.<br>매장&nbsp;내&nbsp;행사(1+1&nbsp;,&nbsp;2+1)&nbsp;증정상품&nbsp;적용&nbsp;가능&nbsp;(단,&nbsp;매장&nbsp;행사기간중에만&nbsp;적용&nbsp;가능)<br>예)&nbsp;증정상품&nbsp;1+1의&nbsp;경우&nbsp;모바일쿠폰&nbsp;1개를&nbsp;결제하면,&nbsp;1+1이&nbsp;적용되어&nbsp;2개&nbsp;상품&nbsp;교환&nbsp;가능<br>예)&nbsp;증정상품&nbsp;2+1의&nbsp;경우&nbsp;모바일쿠폰&nbsp;2개&nbsp;결제하면,&nbsp;2+1이&nbsp;적용&nbsp;되어&nbsp;3개&nbsp;상품&nbsp;교환&nbsp;가능&nbsp;<br>-&nbsp;결제시&nbsp;상품&nbsp;선택&nbsp;후&nbsp;이미지&nbsp;제시&nbsp;바랍니다.<br>-&nbsp;제휴&nbsp;및&nbsp;할인은&nbsp;CU&nbsp;브랜드사&nbsp;정책에&nbsp;따르고&nbsp;있습니다.<br>-&nbsp;현금과&nbsp;교환불가&nbsp;입니다.<br>-&nbsp;바코드인식이&nbsp;안&nbsp;될&nbsp;경우,&nbsp;바코드&nbsp;하단의&nbsp;번호를&nbsp;입력하여&nbsp;결제&nbsp;가능합니다.<br>-&nbsp;해당&nbsp;쿠폰은&nbsp;B2B상품으로&nbsp;유효기간&nbsp;연장&nbsp;및&nbsp;환불이&nbsp;불가합니다.<br><br>☎스마일콘&nbsp;고객센터&nbsp;:&nbsp;1661-8191<br>(영업시간&nbsp;:&nbsp;오전&nbsp;9시&nbsp;30분&nbsp;~&nbsp;18시&lt;주말,공휴일&nbsp;제외&gt;)         </p>"
    },
    {
      id: 469,
      productId: "0000002691",
      seller: 1,
      title: "롯데)ABC초코쿠키50g",
      price: 1000,
      image: "https://www.officecon.co.kr/common/file/download?uploadFullPath=/product/20210224/20210224143501_db859f03-3aab-4040-944e-776454dd17c2.jpg",
      detail: "<p>[이용안내]         <p>          ※&nbsp;오피스콘&nbsp;상품&nbsp;주문시&nbsp;유의사항<br>■&nbsp;1회&nbsp;주문시&nbsp;최대&nbsp;발송&nbsp;가능한&nbsp;수량은&nbsp;1건&nbsp;부터&nbsp;~&nbsp;1,000건&nbsp;까지&nbsp;입니다.<br>■&nbsp;동일한&nbsp;휴대폰번호&nbsp;또는&nbsp;이메일&nbsp;주소&nbsp;발송은&nbsp;ID별&nbsp;최대&nbsp;5개&nbsp;까지만&nbsp;발송&nbsp;가능&nbsp;합니다.<br>■&nbsp;주문&nbsp;일시기준&nbsp;30일&nbsp;이내&nbsp;동일한&nbsp;휴대폰번호&nbsp;또는&nbsp;이메일&nbsp;주소&nbsp;로&nbsp;30회&nbsp;이상&nbsp;발송&nbsp;이력&nbsp;발생시&nbsp;주문&nbsp;불가&nbsp;수신정보&nbsp;리스트에&nbsp;자동&nbsp;등록&nbsp;되어&nbsp;해당&nbsp;수신정보로&nbsp;주문&nbsp;및&nbsp;발송&nbsp;불가&nbsp;합니다.<br>■&nbsp;프로모션(B2B)&nbsp;발송상품으로&nbsp;유효기간&nbsp;연장&nbsp;및&nbsp;환불&nbsp;불가&nbsp;합니다.<br>■&nbsp;시세&nbsp;차익을&nbsp;목적으로&nbsp;사용처에서&nbsp;구매하는&nbsp;경우&nbsp;주문취소&nbsp;및&nbsp;서비스이용이&nbsp;제한될&nbsp;수&nbsp;있습니다.<br><br>▶상품설명&nbsp;<br>-&nbsp;전국&nbsp;CU&nbsp;매장에서&nbsp;상품교환이&nbsp;가능한&nbsp;모바일교환권입니다.&nbsp;(일부매장제외)<br><br>▶유의사항&nbsp;<br>일부&nbsp;특수점포에서는&nbsp;교환권&nbsp;사용이&nbsp;불가&nbsp;할&nbsp;수&nbsp;있습니다.<br>번호이동&nbsp;불가&nbsp;및&nbsp;유효기간&nbsp;만료이후&nbsp;사용이&nbsp;불가합니다.<br>매장&nbsp;내&nbsp;행사(1+1&nbsp;,&nbsp;2+1)&nbsp;증정상품&nbsp;적용&nbsp;가능&nbsp;(단,&nbsp;매장&nbsp;행사기간중에만&nbsp;적용&nbsp;가능)<br>예)&nbsp;증정상품&nbsp;1+1의&nbsp;경우&nbsp;모바일쿠폰&nbsp;1개를&nbsp;결제하면,&nbsp;1+1이&nbsp;적용되어&nbsp;2개&nbsp;상품&nbsp;교환&nbsp;가능<br>예)&nbsp;증정상품&nbsp;2+1의&nbsp;경우&nbsp;모바일쿠폰&nbsp;2개&nbsp;결제하면,&nbsp;2+1이&nbsp;적용&nbsp;되어&nbsp;3개&nbsp;상품&nbsp;교환&nbsp;가능&nbsp;<br>-&nbsp;결제시&nbsp;상품&nbsp;선택&nbsp;후&nbsp;이미지&nbsp;제시&nbsp;바랍니다.<br>-&nbsp;제휴&nbsp;및&nbsp;할인은&nbsp;CU&nbsp;브랜드사&nbsp;정책에&nbsp;따르고&nbsp;있습니다.<br>-&nbsp;현금과&nbsp;교환불가&nbsp;입니다.<br>-&nbsp;바코드인식이&nbsp;안&nbsp;될&nbsp;경우,&nbsp;바코드&nbsp;하단의&nbsp;번호를&nbsp;입력하여&nbsp;결제&nbsp;가능합니다.<br>-&nbsp;해당&nbsp;쿠폰은&nbsp;B2B상품으로&nbsp;유효기간&nbsp;연장&nbsp;및&nbsp;환불이&nbsp;불가합니다.<br><br>☎스마일콘&nbsp;고객센터&nbsp;:&nbsp;1661-8191<br>(영업시간&nbsp;:&nbsp;오전&nbsp;9시&nbsp;30분&nbsp;~&nbsp;18시&lt;주말,공휴일&nbsp;제외&gt;)         </p>"
    },
    {
      id: 470,
      productId: "0000002692",
      seller: 1,
      title: "롯데)가나마일드초콜릿34g",
      price: 1000,
      image: "https://www.officecon.co.kr/common/file/download?uploadFullPath=/product/20210224/20210224143352_a29c3df3-498b-4381-bf2a-5ac3a1b8f08a.jpg",
      detail: "<p>[이용안내]         <p>          ※&nbsp;오피스콘&nbsp;상품&nbsp;주문시&nbsp;유의사항<br>■&nbsp;1회&nbsp;주문시&nbsp;최대&nbsp;발송&nbsp;가능한&nbsp;수량은&nbsp;1건&nbsp;부터&nbsp;~&nbsp;1,000건&nbsp;까지&nbsp;입니다.<br>■&nbsp;동일한&nbsp;휴대폰번호&nbsp;또는&nbsp;이메일&nbsp;주소&nbsp;발송은&nbsp;ID별&nbsp;최대&nbsp;5개&nbsp;까지만&nbsp;발송&nbsp;가능&nbsp;합니다.<br>■&nbsp;주문&nbsp;일시기준&nbsp;30일&nbsp;이내&nbsp;동일한&nbsp;휴대폰번호&nbsp;또는&nbsp;이메일&nbsp;주소&nbsp;로&nbsp;30회&nbsp;이상&nbsp;발송&nbsp;이력&nbsp;발생시&nbsp;주문&nbsp;불가&nbsp;수신정보&nbsp;리스트에&nbsp;자동&nbsp;등록&nbsp;되어&nbsp;해당&nbsp;수신정보로&nbsp;주문&nbsp;및&nbsp;발송&nbsp;불가&nbsp;합니다.<br>■&nbsp;프로모션(B2B)&nbsp;발송상품으로&nbsp;유효기간&nbsp;연장&nbsp;및&nbsp;환불&nbsp;불가&nbsp;합니다.<br>■&nbsp;시세&nbsp;차익을&nbsp;목적으로&nbsp;사용처에서&nbsp;구매하는&nbsp;경우&nbsp;주문취소&nbsp;및&nbsp;서비스이용이&nbsp;제한될&nbsp;수&nbsp;있습니다.<br><br>▶상품설명&nbsp;<br>-&nbsp;전국&nbsp;CU&nbsp;매장에서&nbsp;상품교환이&nbsp;가능한&nbsp;모바일교환권입니다.&nbsp;(일부매장제외)<br><br>▶유의사항&nbsp;<br>일부&nbsp;특수점포에서는&nbsp;교환권&nbsp;사용이&nbsp;불가&nbsp;할&nbsp;수&nbsp;있습니다.<br>번호이동&nbsp;불가&nbsp;및&nbsp;유효기간&nbsp;만료이후&nbsp;사용이&nbsp;불가합니다.<br>매장&nbsp;내&nbsp;행사(1+1&nbsp;,&nbsp;2+1)&nbsp;증정상품&nbsp;적용&nbsp;가능&nbsp;(단,&nbsp;매장&nbsp;행사기간중에만&nbsp;적용&nbsp;가능)<br>예)&nbsp;증정상품&nbsp;1+1의&nbsp;경우&nbsp;모바일쿠폰&nbsp;1개를&nbsp;결제하면,&nbsp;1+1이&nbsp;적용되어&nbsp;2개&nbsp;상품&nbsp;교환&nbsp;가능<br>예)&nbsp;증정상품&nbsp;2+1의&nbsp;경우&nbsp;모바일쿠폰&nbsp;2개&nbsp;결제하면,&nbsp;2+1이&nbsp;적용&nbsp;되어&nbsp;3개&nbsp;상품&nbsp;교환&nbsp;가능&nbsp;<br>-&nbsp;결제시&nbsp;상품&nbsp;선택&nbsp;후&nbsp;이미지&nbsp;제시&nbsp;바랍니다.<br>-&nbsp;제휴&nbsp;및&nbsp;할인은&nbsp;CU&nbsp;브랜드사&nbsp;정책에&nbsp;따르고&nbsp;있습니다.<br>-&nbsp;현금과&nbsp;교환불가&nbsp;입니다.<br>-&nbsp;바코드인식이&nbsp;안&nbsp;될&nbsp;경우,&nbsp;바코드&nbsp;하단의&nbsp;번호를&nbsp;입력하여&nbsp;결제&nbsp;가능합니다.<br>-&nbsp;해당&nbsp;쿠폰은&nbsp;B2B상품으로&nbsp;유효기간&nbsp;연장&nbsp;및&nbsp;환불이&nbsp;불가합니다.<br><br>☎스마일콘&nbsp;고객센터&nbsp;:&nbsp;1661-8191<br>(영업시간&nbsp;:&nbsp;오전&nbsp;9시&nbsp;30분&nbsp;~&nbsp;18시&lt;주말,공휴일&nbsp;제외&gt;)         </p>"
    },
    {
      id: 471,
      productId: "0000002748",
      seller: 1,
      title: "매일)허쉬초코드링크235ml",
      price: 1200,
      image: "https://www.officecon.co.kr/common/file/download?uploadFullPath=/product/20210224/20210224102557_ca5c6e9d-bfcc-4443-b7fa-2d152e6ae249.jpg",
      detail: "<p>[이용안내]         <p>          ※&nbsp;오피스콘&nbsp;상품&nbsp;주문시&nbsp;유의사항<br>■&nbsp;1회&nbsp;주문시&nbsp;최대&nbsp;발송&nbsp;가능한&nbsp;수량은&nbsp;1건&nbsp;부터&nbsp;~&nbsp;1,000건&nbsp;까지&nbsp;입니다.<br>■&nbsp;동일한&nbsp;휴대폰번호&nbsp;또는&nbsp;이메일&nbsp;주소&nbsp;발송은&nbsp;ID별&nbsp;최대&nbsp;5개&nbsp;까지만&nbsp;발송&nbsp;가능&nbsp;합니다.<br>■&nbsp;주문&nbsp;일시기준&nbsp;30일&nbsp;이내&nbsp;동일한&nbsp;휴대폰번호&nbsp;또는&nbsp;이메일&nbsp;주소&nbsp;로&nbsp;30회&nbsp;이상&nbsp;발송&nbsp;이력&nbsp;발생시&nbsp;주문&nbsp;불가&nbsp;수신정보&nbsp;리스트에&nbsp;자동&nbsp;등록&nbsp;되어&nbsp;해당&nbsp;수신정보로&nbsp;주문&nbsp;및&nbsp;발송&nbsp;불가&nbsp;합니다.<br>■&nbsp;프로모션(B2B)&nbsp;발송상품으로&nbsp;유효기간&nbsp;연장&nbsp;및&nbsp;환불&nbsp;불가&nbsp;합니다.<br>■&nbsp;시세&nbsp;차익을&nbsp;목적으로&nbsp;사용처에서&nbsp;구매하는&nbsp;경우&nbsp;주문취소&nbsp;및&nbsp;서비스이용이&nbsp;제한될&nbsp;수&nbsp;있습니다.<br><br>▶상품설명&nbsp;<br>-&nbsp;전국&nbsp;CU&nbsp;매장에서&nbsp;상품교환이&nbsp;가능한&nbsp;모바일교환권입니다.&nbsp;(일부매장제외)<br><br>▶유의사항&nbsp;<br>일부&nbsp;특수점포에서는&nbsp;교환권&nbsp;사용이&nbsp;불가&nbsp;할&nbsp;수&nbsp;있습니다.<br>번호이동&nbsp;불가&nbsp;및&nbsp;유효기간&nbsp;만료이후&nbsp;사용이&nbsp;불가합니다.<br>매장&nbsp;내&nbsp;행사(1+1&nbsp;,&nbsp;2+1)&nbsp;증정상품&nbsp;적용&nbsp;가능&nbsp;(단,&nbsp;매장&nbsp;행사기간중에만&nbsp;적용&nbsp;가능)<br>예)&nbsp;증정상품&nbsp;1+1의&nbsp;경우&nbsp;모바일쿠폰&nbsp;1개를&nbsp;결제하면,&nbsp;1+1이&nbsp;적용되어&nbsp;2개&nbsp;상품&nbsp;교환&nbsp;가능<br>예)&nbsp;증정상품&nbsp;2+1의&nbsp;경우&nbsp;모바일쿠폰&nbsp;2개&nbsp;결제하면,&nbsp;2+1이&nbsp;적용&nbsp;되어&nbsp;3개&nbsp;상품&nbsp;교환&nbsp;가능&nbsp;<br>-&nbsp;결제시&nbsp;상품&nbsp;선택&nbsp;후&nbsp;이미지&nbsp;제시&nbsp;바랍니다.<br>-&nbsp;제휴&nbsp;및&nbsp;할인은&nbsp;CU&nbsp;브랜드사&nbsp;정책에&nbsp;따르고&nbsp;있습니다.<br>-&nbsp;현금과&nbsp;교환불가&nbsp;입니다.<br>-&nbsp;바코드인식이&nbsp;안&nbsp;될&nbsp;경우,&nbsp;바코드&nbsp;하단의&nbsp;번호를&nbsp;입력하여&nbsp;결제&nbsp;가능합니다.<br>-&nbsp;해당&nbsp;쿠폰은&nbsp;B2B상품으로&nbsp;유효기간&nbsp;연장&nbsp;및&nbsp;환불이&nbsp;불가합니다.<br><br>☎스마일콘&nbsp;고객센터&nbsp;:&nbsp;1661-8191<br>(영업시간&nbsp;:&nbsp;오전&nbsp;9시&nbsp;30분&nbsp;~&nbsp;18시&lt;주말,공휴일&nbsp;제외&gt;)         </p>"
    },
    {
      id: 472,
      productId: "0000002696",
      seller: 1,
      title: "마즈)트윅스쿠키",
      price: 1200,
      image: "https://www.officecon.co.kr/common/file/download?uploadFullPath=/product/20210224/20210224142937_dc21a251-dee1-4b87-be52-289007d0d128.jpg",
      detail: "<p>[이용안내]         <p>          ※&nbsp;오피스콘&nbsp;상품&nbsp;주문시&nbsp;유의사항<br>■&nbsp;1회&nbsp;주문시&nbsp;최대&nbsp;발송&nbsp;가능한&nbsp;수량은&nbsp;1건&nbsp;부터&nbsp;~&nbsp;1,000건&nbsp;까지&nbsp;입니다.<br>■&nbsp;동일한&nbsp;휴대폰번호&nbsp;또는&nbsp;이메일&nbsp;주소&nbsp;발송은&nbsp;ID별&nbsp;최대&nbsp;5개&nbsp;까지만&nbsp;발송&nbsp;가능&nbsp;합니다.<br>■&nbsp;주문&nbsp;일시기준&nbsp;30일&nbsp;이내&nbsp;동일한&nbsp;휴대폰번호&nbsp;또는&nbsp;이메일&nbsp;주소&nbsp;로&nbsp;30회&nbsp;이상&nbsp;발송&nbsp;이력&nbsp;발생시&nbsp;주문&nbsp;불가&nbsp;수신정보&nbsp;리스트에&nbsp;자동&nbsp;등록&nbsp;되어&nbsp;해당&nbsp;수신정보로&nbsp;주문&nbsp;및&nbsp;발송&nbsp;불가&nbsp;합니다.<br>■&nbsp;프로모션(B2B)&nbsp;발송상품으로&nbsp;유효기간&nbsp;연장&nbsp;및&nbsp;환불&nbsp;불가&nbsp;합니다.<br>■&nbsp;시세&nbsp;차익을&nbsp;목적으로&nbsp;사용처에서&nbsp;구매하는&nbsp;경우&nbsp;주문취소&nbsp;및&nbsp;서비스이용이&nbsp;제한될&nbsp;수&nbsp;있습니다.<br><br>▶상품설명&nbsp;<br>-&nbsp;전국&nbsp;CU&nbsp;매장에서&nbsp;상품교환이&nbsp;가능한&nbsp;모바일교환권입니다.&nbsp;(일부매장제외)<br><br>▶유의사항&nbsp;<br>일부&nbsp;특수점포에서는&nbsp;교환권&nbsp;사용이&nbsp;불가&nbsp;할&nbsp;수&nbsp;있습니다.<br>번호이동&nbsp;불가&nbsp;및&nbsp;유효기간&nbsp;만료이후&nbsp;사용이&nbsp;불가합니다.<br>매장&nbsp;내&nbsp;행사(1+1&nbsp;,&nbsp;2+1)&nbsp;증정상품&nbsp;적용&nbsp;가능&nbsp;(단,&nbsp;매장&nbsp;행사기간중에만&nbsp;적용&nbsp;가능)<br>예)&nbsp;증정상품&nbsp;1+1의&nbsp;경우&nbsp;모바일쿠폰&nbsp;1개를&nbsp;결제하면,&nbsp;1+1이&nbsp;적용되어&nbsp;2개&nbsp;상품&nbsp;교환&nbsp;가능<br>예)&nbsp;증정상품&nbsp;2+1의&nbsp;경우&nbsp;모바일쿠폰&nbsp;2개&nbsp;결제하면,&nbsp;2+1이&nbsp;적용&nbsp;되어&nbsp;3개&nbsp;상품&nbsp;교환&nbsp;가능&nbsp;<br>-&nbsp;결제시&nbsp;상품&nbsp;선택&nbsp;후&nbsp;이미지&nbsp;제시&nbsp;바랍니다.<br>-&nbsp;제휴&nbsp;및&nbsp;할인은&nbsp;CU&nbsp;브랜드사&nbsp;정책에&nbsp;따르고&nbsp;있습니다.<br>-&nbsp;현금과&nbsp;교환불가&nbsp;입니다.<br>-&nbsp;바코드인식이&nbsp;안&nbsp;될&nbsp;경우,&nbsp;바코드&nbsp;하단의&nbsp;번호를&nbsp;입력하여&nbsp;결제&nbsp;가능합니다.<br>-&nbsp;해당&nbsp;쿠폰은&nbsp;B2B상품으로&nbsp;유효기간&nbsp;연장&nbsp;및&nbsp;환불이&nbsp;불가합니다.<br><br>☎스마일콘&nbsp;고객센터&nbsp;:&nbsp;1661-8191<br>(영업시간&nbsp;:&nbsp;오전&nbsp;9시&nbsp;30분&nbsp;~&nbsp;18시&lt;주말,공휴일&nbsp;제외&gt;)         </p>"
    }
  ]
}

const lotteriaBox: BoxWithItems = {
  id: 97,
  title: "간식먹으러 롯데리아",
  price: 2500,
  image: "https://www.officecon.co.kr/common/file/download?uploadFullPath=/product/20210602/20210602144728_a467b9a2-82b4-4481-85c8-bc9a241ed2b9.jpg",
  isLocal: false,
  detail: "롯데리아는 치즈스틱이지!😋</br>간식먹으러 롯데리아 갈 사람? 저요!👋",
  ownerId: "k1912476571",
  sales: 10,
  isManager: true,
  items: [
    {
      id: 486,
      productId: "0000003435",
      seller: 1,
      title: "지파이 고소한맛",
      price: 3500,
      image: "https://www.officecon.co.kr/common/file/download?uploadFullPath=/product/20210602/20210602151020_865e48ce-d417-42d5-849a-fe98cd39e86a.jpg",
      detail: "<p>[이용안내]         <p>          [오피스콘&nbsp;상품&nbsp;주문시&nbsp;유의사항]&nbsp;&nbsp;<br>■&nbsp;1회&nbsp;주문기준&nbsp;최대&nbsp;발송&nbsp;가능한&nbsp;수량은&nbsp;1건&nbsp;부터&nbsp;~&nbsp;1,000건&nbsp;까지&nbsp;입니다.<br>■&nbsp;휴대폰번호&nbsp;또는&nbsp;이메일주소&nbsp;중복&nbsp;수신&nbsp;허용&nbsp;건수&nbsp;각&nbsp;5개&nbsp;까지&nbsp;가능&nbsp;합니다.<br>■&nbsp;주문&nbsp;일시기준&nbsp;30일&nbsp;이내&nbsp;동일한&nbsp;휴대폰번호&nbsp;또는&nbsp;이메일주소&nbsp;로&nbsp;주문일&nbsp;기준&nbsp;월&nbsp;30회&nbsp;이상&nbsp;발송&nbsp;이력&nbsp;발생시&nbsp;주문&nbsp;불가&nbsp;수신정보&nbsp;리스트에&nbsp;자동&nbsp;등록&nbsp;되어&nbsp;해당&nbsp;수신정보로&nbsp;주문&nbsp;및&nbsp;발송&nbsp;불가&nbsp;합니다.<br>■&nbsp;해당&nbsp;상품은&nbsp;프로모션(B2B)&nbsp;전용&nbsp;상품으로&nbsp;유효기간&nbsp;연장&nbsp;불가,&nbsp;유효기간&nbsp;만료시&nbsp;환불&nbsp;불가&nbsp;합니다.<br>■&nbsp;시세&nbsp;차익을&nbsp;목적으로&nbsp;사용처에서&nbsp;구매하는&nbsp;경우&nbsp;주문취소&nbsp;및&nbsp;서비스이용이&nbsp;제한될&nbsp;수&nbsp;있습니다.<br><br>[이용&nbsp;안내]<br>1.&nbsp;본&nbsp;상품은&nbsp;매장&nbsp;재고&nbsp;상황에&nbsp;따라&nbsp;동일상품으로&nbsp;교환이&nbsp;불가능할&nbsp;수&nbsp;있습니다.<br>2.&nbsp;매장&nbsp;별&nbsp;재고&nbsp;상황에&nbsp;따라&nbsp;동일금액의&nbsp;타&nbsp;상품으로&nbsp;교환이&nbsp;가능하며,<br>해당&nbsp;금액보다&nbsp;높을&nbsp;경우&nbsp;초과금액을&nbsp;결제하시면&nbsp;교환&nbsp;가능&nbsp;합니다.<br>3.&nbsp;본&nbsp;쿠폰&nbsp;교환&nbsp;시&nbsp;L.POINT&nbsp;적립&nbsp;및&nbsp;현금영수증&nbsp;발행&nbsp;가능&nbsp;합니다.<br>4.&nbsp;타&nbsp;행사와&nbsp;중복적용은&nbsp;브랜드사&nbsp;정책에&nbsp;따릅니다.<br>5.&nbsp;유효기간&nbsp;이내&nbsp;사용&nbsp;가능합니다.<br>6.&nbsp;매장&nbsp;방문&nbsp;주문&nbsp;시에만&nbsp;사용&nbsp;가능&nbsp;합니다.<br>7.&nbsp;상기&nbsp;이미지는&nbsp;연출된&nbsp;것으로&nbsp;실제와&nbsp;다를&nbsp;수&nbsp;있습니다.<br>8.&nbsp;홈서비스(배달),&nbsp;잇츠오더에서&nbsp;사용&nbsp;불가합니다.<br>9.&nbsp;환불,&nbsp;교환,&nbsp;승인에&nbsp;대한&nbsp;문의는&nbsp;쿠폰&nbsp;구매처에&nbsp;문의주시기&nbsp;바랍니다.<br>(롯데리아는&nbsp;쿠폰의&nbsp;구매처가&nbsp;아니고&nbsp;사용처&nbsp;입니다.)<br><br>*본&nbsp;모바일&nbsp;쿠폰은&nbsp;무상제공(B2B)&nbsp;발송&nbsp;상품으로&nbsp;유효기간&nbsp;연장&nbsp;및&nbsp;환불&nbsp;대상이&nbsp;아닙니다.<br><br>[이용가능매장&nbsp;안내]<br>■&nbsp;롯데리아&nbsp;국내&nbsp;전&nbsp;매장(단,&nbsp;공항,&nbsp;리조트&nbsp;및&nbsp;휴게소,&nbsp;위락시설&nbsp;주변매장&nbsp;등&nbsp;특수매장&nbsp;및&nbsp;일부점포&nbsp;제외)<br>■&nbsp;홈서비스(배달),&nbsp;잇츠오더&nbsp;제외         </p>"
    },
    {
      id: 487,
      productId: "0000003434",
      seller: 1,
      title: "토네이도 초코쿠키",
      price: 2500,
      image: "https://www.officecon.co.kr/common/file/download?uploadFullPath=/product/20210602/20210602150959_abc63eb7-eb29-49ec-a186-a8a0703bf230.jpg",
      detail: "<p>[이용안내]         <p>          [오피스콘&nbsp;상품&nbsp;주문시&nbsp;유의사항]&nbsp;&nbsp;<br>■&nbsp;1회&nbsp;주문기준&nbsp;최대&nbsp;발송&nbsp;가능한&nbsp;수량은&nbsp;1건&nbsp;부터&nbsp;~&nbsp;1,000건&nbsp;까지&nbsp;입니다.<br>■&nbsp;휴대폰번호&nbsp;또는&nbsp;이메일주소&nbsp;중복&nbsp;수신&nbsp;허용&nbsp;건수&nbsp;각&nbsp;5개&nbsp;까지&nbsp;가능&nbsp;합니다.<br>■&nbsp;주문&nbsp;일시기준&nbsp;30일&nbsp;이내&nbsp;동일한&nbsp;휴대폰번호&nbsp;또는&nbsp;이메일주소&nbsp;로&nbsp;주문일&nbsp;기준&nbsp;월&nbsp;30회&nbsp;이상&nbsp;발송&nbsp;이력&nbsp;발생시&nbsp;주문&nbsp;불가&nbsp;수신정보&nbsp;리스트에&nbsp;자동&nbsp;등록&nbsp;되어&nbsp;해당&nbsp;수신정보로&nbsp;주문&nbsp;및&nbsp;발송&nbsp;불가&nbsp;합니다.<br>■&nbsp;해당&nbsp;상품은&nbsp;프로모션(B2B)&nbsp;전용&nbsp;상품으로&nbsp;유효기간&nbsp;연장&nbsp;불가,&nbsp;유효기간&nbsp;만료시&nbsp;환불&nbsp;불가&nbsp;합니다.<br>■&nbsp;시세&nbsp;차익을&nbsp;목적으로&nbsp;사용처에서&nbsp;구매하는&nbsp;경우&nbsp;주문취소&nbsp;및&nbsp;서비스이용이&nbsp;제한될&nbsp;수&nbsp;있습니다.<br><br>[이용&nbsp;안내]<br>1.&nbsp;본&nbsp;상품은&nbsp;매장&nbsp;재고&nbsp;상황에&nbsp;따라&nbsp;동일상품으로&nbsp;교환이&nbsp;불가능할&nbsp;수&nbsp;있습니다.<br>2.&nbsp;매장&nbsp;별&nbsp;재고&nbsp;상황에&nbsp;따라&nbsp;동일금액의&nbsp;타&nbsp;상품으로&nbsp;교환이&nbsp;가능하며,<br>해당&nbsp;금액보다&nbsp;높을&nbsp;경우&nbsp;초과금액을&nbsp;결제하시면&nbsp;교환&nbsp;가능&nbsp;합니다.<br>3.&nbsp;본&nbsp;쿠폰&nbsp;교환&nbsp;시&nbsp;L.POINT&nbsp;적립&nbsp;및&nbsp;현금영수증&nbsp;발행&nbsp;가능&nbsp;합니다.<br>4.&nbsp;타&nbsp;행사와&nbsp;중복적용은&nbsp;브랜드사&nbsp;정책에&nbsp;따릅니다.<br>5.&nbsp;유효기간&nbsp;이내&nbsp;사용&nbsp;가능합니다.<br>6.&nbsp;매장&nbsp;방문&nbsp;주문&nbsp;시에만&nbsp;사용&nbsp;가능&nbsp;합니다.<br>7.&nbsp;상기&nbsp;이미지는&nbsp;연출된&nbsp;것으로&nbsp;실제와&nbsp;다를&nbsp;수&nbsp;있습니다.<br>8.&nbsp;홈서비스(배달),&nbsp;잇츠오더에서&nbsp;사용&nbsp;불가합니다.<br>9.&nbsp;환불,&nbsp;교환,&nbsp;승인에&nbsp;대한&nbsp;문의는&nbsp;쿠폰&nbsp;구매처에&nbsp;문의주시기&nbsp;바랍니다.<br>(롯데리아는&nbsp;쿠폰의&nbsp;구매처가&nbsp;아니고&nbsp;사용처&nbsp;입니다.)<br><br>*본&nbsp;모바일&nbsp;쿠폰은&nbsp;무상제공(B2B)&nbsp;발송&nbsp;상품으로&nbsp;유효기간&nbsp;연장&nbsp;및&nbsp;환불&nbsp;대상이&nbsp;아닙니다.<br><br>[이용가능매장&nbsp;안내]<br>■&nbsp;롯데리아&nbsp;국내&nbsp;전&nbsp;매장(단,&nbsp;공항,&nbsp;리조트&nbsp;및&nbsp;휴게소,&nbsp;위락시설&nbsp;주변매장&nbsp;등&nbsp;특수매장&nbsp;및&nbsp;일부점포&nbsp;제외)<br>■&nbsp;홈서비스(배달),&nbsp;잇츠오더&nbsp;제외         </p>"
    },
    {
      id: 488,
      productId: "0000003394",
      seller: 1,
      title: "치즈스틱",
      price: 2000,
      image: "https://www.officecon.co.kr/common/file/download?uploadFullPath=/product/20210602/20210602144728_a467b9a2-82b4-4481-85c8-bc9a241ed2b9.jpg",
      detail: "<p>[이용안내]         <p>          [오피스콘&nbsp;상품&nbsp;주문시&nbsp;유의사항]&nbsp;&nbsp;<br>■&nbsp;1회&nbsp;주문기준&nbsp;최대&nbsp;발송&nbsp;가능한&nbsp;수량은&nbsp;1건&nbsp;부터&nbsp;~&nbsp;1,000건&nbsp;까지&nbsp;입니다.<br>■&nbsp;휴대폰번호&nbsp;또는&nbsp;이메일주소&nbsp;중복&nbsp;수신&nbsp;허용&nbsp;건수&nbsp;각&nbsp;5개&nbsp;까지&nbsp;가능&nbsp;합니다.<br>■&nbsp;주문&nbsp;일시기준&nbsp;30일&nbsp;이내&nbsp;동일한&nbsp;휴대폰번호&nbsp;또는&nbsp;이메일주소&nbsp;로&nbsp;주문일&nbsp;기준&nbsp;월&nbsp;30회&nbsp;이상&nbsp;발송&nbsp;이력&nbsp;발생시&nbsp;주문&nbsp;불가&nbsp;수신정보&nbsp;리스트에&nbsp;자동&nbsp;등록&nbsp;되어&nbsp;해당&nbsp;수신정보로&nbsp;주문&nbsp;및&nbsp;발송&nbsp;불가&nbsp;합니다.<br>■&nbsp;해당&nbsp;상품은&nbsp;프로모션(B2B)&nbsp;전용&nbsp;상품으로&nbsp;유효기간&nbsp;연장&nbsp;불가,&nbsp;유효기간&nbsp;만료시&nbsp;환불&nbsp;불가&nbsp;합니다.<br>■&nbsp;시세&nbsp;차익을&nbsp;목적으로&nbsp;사용처에서&nbsp;구매하는&nbsp;경우&nbsp;주문취소&nbsp;및&nbsp;서비스이용이&nbsp;제한될&nbsp;수&nbsp;있습니다.<br><br>[이용&nbsp;안내]<br>1.&nbsp;본&nbsp;상품은&nbsp;매장&nbsp;재고&nbsp;상황에&nbsp;따라&nbsp;동일상품으로&nbsp;교환이&nbsp;불가능할&nbsp;수&nbsp;있습니다.<br>2.&nbsp;매장&nbsp;별&nbsp;재고&nbsp;상황에&nbsp;따라&nbsp;동일금액의&nbsp;타&nbsp;상품으로&nbsp;교환이&nbsp;가능하며,<br>해당&nbsp;금액보다&nbsp;높을&nbsp;경우&nbsp;초과금액을&nbsp;결제하시면&nbsp;교환&nbsp;가능&nbsp;합니다.<br>3.&nbsp;본&nbsp;쿠폰&nbsp;교환&nbsp;시&nbsp;L.POINT&nbsp;적립&nbsp;및&nbsp;현금영수증&nbsp;발행&nbsp;가능&nbsp;합니다.<br>4.&nbsp;타&nbsp;행사와&nbsp;중복적용은&nbsp;브랜드사&nbsp;정책에&nbsp;따릅니다.<br>5.&nbsp;유효기간&nbsp;이내&nbsp;사용&nbsp;가능합니다.<br>6.&nbsp;매장&nbsp;방문&nbsp;주문&nbsp;시에만&nbsp;사용&nbsp;가능&nbsp;합니다.<br>7.&nbsp;상기&nbsp;이미지는&nbsp;연출된&nbsp;것으로&nbsp;실제와&nbsp;다를&nbsp;수&nbsp;있습니다.<br>8.&nbsp;홈서비스(배달),&nbsp;잇츠오더에서&nbsp;사용&nbsp;불가합니다.<br>9.&nbsp;환불,&nbsp;교환,&nbsp;승인에&nbsp;대한&nbsp;문의는&nbsp;쿠폰&nbsp;구매처에&nbsp;문의주시기&nbsp;바랍니다.<br>(롯데리아는&nbsp;쿠폰의&nbsp;구매처가&nbsp;아니고&nbsp;사용처&nbsp;입니다.)<br><br>*본&nbsp;모바일&nbsp;쿠폰은&nbsp;무상제공(B2B)&nbsp;발송&nbsp;상품으로&nbsp;유효기간&nbsp;연장&nbsp;및&nbsp;환불&nbsp;대상이&nbsp;아닙니다.<br><br>[이용가능매장&nbsp;안내]<br>■&nbsp;롯데리아&nbsp;국내&nbsp;전&nbsp;매장(단,&nbsp;공항,&nbsp;리조트&nbsp;및&nbsp;휴게소,&nbsp;위락시설&nbsp;주변매장&nbsp;등&nbsp;특수매장&nbsp;및&nbsp;일부점포&nbsp;제외)<br>■&nbsp;홈서비스(배달),&nbsp;잇츠오더&nbsp;제외         </p>"
    }
  ]
}

const myBox: BoxWithItems = {
  id: 110,
  title: "먹고싶은것만 담아",
  price: 3000,
  image: "https://user-images.githubusercontent.com/45932570/132882385-63dbdd85-97a5-40fd-9bb5-513564376c24.png",
  isLocal: false,
  detail: "토끼님의 먹고싶은것만 담아 박스입니다.",
  ownerId: "f3940067249449200",
  sales: 1,
  isManager: false,
  items: [
    {
      id: 453,
      productId: "0000003747",
      seller: 1,
      title: "오리엔탈파닭치킨+콜라(1.25L)+감자",
      price: 23000,
      image: "https://www.officecon.co.kr/common/file/download?uploadFullPath=/product/20210916/20210916164543_db54a7bf-3196-40e0-b2fd-e4ca89227c0a.jpg",
      detail: "<p>[이용안내]<br>모바일상품권&nbsp;수령&gt;&nbsp;이용가능매장&nbsp;확인&gt;&nbsp;해당&nbsp;매장&nbsp;전화&nbsp;또는&nbsp;방문&gt;&nbsp;모바일상품권&nbsp;12자리&nbsp;인증&gt;&nbsp;주문&gt;&nbsp;배달<br>&nbsp;<br>[유의사항]<br>-&nbsp;배달료는&nbsp;각&nbsp;가맹점의&nbsp;자율로&nbsp;운영되며,&nbsp;가맹점에&nbsp;따라&nbsp;청구&nbsp;될&nbsp;수&nbsp;있습니다,&nbsp;방문/이용&nbsp;지점에&nbsp;이용&nbsp;전&nbsp;확인&nbsp;부탁&nbsp;드립니다<br>-&nbsp;모바일상품권에&nbsp;명시된&nbsp;제품에&nbsp;한하여&nbsp;교환이&nbsp;가능하며,&nbsp;교환&nbsp;후&nbsp;취소가&nbsp;불가합니다.&nbsp;(타제품&nbsp;교환불가)<br>-&nbsp;배달가능&nbsp;지역이&nbsp;아닐&nbsp;경우&nbsp;사용이&nbsp;제한될&nbsp;수&nbsp;있습니다.<br>-&nbsp;주문이용가능시간은&nbsp;12:00&nbsp;~&nbsp;24:00이며,&nbsp;매장상황에&nbsp;따라&nbsp;상이할&nbsp;수&nbsp;있습니다.<br>-&nbsp;대표주문번호(1599-4479)로는&nbsp;사용이&nbsp;불가합니다.<br>-&nbsp;음료&nbsp;및&nbsp;감자는&nbsp;매장별로&nbsp;종류가&nbsp;상이할&nbsp;수&nbsp;있습니다.<br>-&nbsp;상기&nbsp;이미지는&nbsp;실제와&nbsp;다를&nbsp;수&nbsp;있습니다.<br>-&nbsp;B2B(프로모션,&nbsp;이벤트&nbsp;등)으로&nbsp;지급된&nbsp;쿠폰의&nbsp;경우&nbsp;환불&nbsp;및&nbsp;유효기간&nbsp;연장이&nbsp;불가합니다.<br><br>[원산지]<br>닭고기:국내산<br>&nbsp;<br>[사용불가매장]<br>https://cpn.donutbook.co.kr/nene/storelist.do&nbsp;<br>&nbsp;<br>[고객문의]&nbsp;<br>1599-6567(평일&nbsp;09:00~18:00/점심시간&nbsp;12:00~13:00)         </p>"
    },
    {
      id: 458,
      productId: "0000002159",
      seller: 1,
      title: "치킨데리야끼(15cm) 쿠키세트",
      price: 7600,
      image: "https://www.officecon.co.kr/common/file/download?uploadFullPath=/product/20201216/20201216110109_2938035a-69bb-407f-be73-df020f55a0c7.jpg",
      detail: "<p>[이용안내]         <p>          ※&nbsp;오피스콘&nbsp;상품&nbsp;주문시&nbsp;유의사항<br>■&nbsp;1회&nbsp;주문시&nbsp;최대&nbsp;발송&nbsp;가능한&nbsp;수량은&nbsp;1건&nbsp;부터&nbsp;~&nbsp;1,000건&nbsp;까지&nbsp;입니다.<br>■&nbsp;동일한&nbsp;휴대폰번호&nbsp;또는&nbsp;이메일&nbsp;주소&nbsp;발송은&nbsp;ID별&nbsp;최대&nbsp;5개&nbsp;까지만&nbsp;발송&nbsp;가능&nbsp;합니다.<br>■&nbsp;30일&nbsp;이내&nbsp;동일한&nbsp;휴대폰번호&nbsp;또는&nbsp;이메일&nbsp;주소&nbsp;로&nbsp;30회&nbsp;이상&nbsp;발송&nbsp;이력&nbsp;발생시&nbsp;주문&nbsp;불가&nbsp;수신정보&nbsp;리스트에&nbsp;자동&nbsp;등록&nbsp;되어&nbsp;해당&nbsp;수신정보로&nbsp;주문&nbsp;및&nbsp;발송&nbsp;불가&nbsp;합니다.<br>■&nbsp;해당&nbsp;상품은&nbsp;프로모션(B2B)&nbsp;발송상품으로&nbsp;유효기간&nbsp;연장&nbsp;및&nbsp;환불&nbsp;불가&nbsp;합니다.<br>■&nbsp;시세&nbsp;차익을&nbsp;목적으로&nbsp;사용처에서&nbsp;구매하는&nbsp;경우&nbsp;주문취소&nbsp;및&nbsp;서비스이용이&nbsp;제한될&nbsp;수&nbsp;있습니다.<br><br>[유의사항]<br>-&nbsp;본&nbsp;쿠폰은&nbsp;해당&nbsp;상품으로만&nbsp;교환이&nbsp;가능&nbsp;합니다.&nbsp;<br>-&nbsp;단,&nbsp;매장&nbsp;별&nbsp;재고&nbsp;상황에&nbsp;따라&nbsp;해당&nbsp;제품으로&nbsp;교환이&nbsp;불가능&nbsp;할&nbsp;경우&nbsp;동일&nbsp;가격&nbsp;또는&nbsp;그&nbsp;이상의&nbsp;제품으로만&nbsp;교환&nbsp;가능&nbsp;합니다.<br>-&nbsp;결제&nbsp;시&nbsp;모바일&nbsp;쿠폰을&nbsp;제시해&nbsp;주세요.<br>-&nbsp;모바일&nbsp;금액권&nbsp;중복&nbsp;사용이&nbsp;가능합니다.<br>-&nbsp;해당&nbsp;제품이&nbsp;할인&nbsp;행사&nbsp;품목에&nbsp;해당될&nbsp;경우&nbsp;행사가격으로&nbsp;구매하실&nbsp;수&nbsp;있으나&nbsp;권면가액&nbsp;또는&nbsp;그&nbsp;이상으로만&nbsp;결제가&nbsp;가능합니다.<br>&nbsp;-&nbsp;웨지&nbsp;세트는&nbsp;오전&nbsp;11시&nbsp;이후에만&nbsp;구매&nbsp;하실&nbsp;수&nbsp;있습니다.&nbsp;<br>-&nbsp;사전에&nbsp;고지된&nbsp;일부&nbsp;이벤트에&nbsp;한하여&nbsp;모바일&nbsp;상품권&nbsp;사용이&nbsp;제한될&nbsp;수&nbsp;있습니다.<br>-&nbsp;매장&nbsp;방문&nbsp;시에만&nbsp;사용&nbsp;가능합니다.<br>-&nbsp;사용&nbsp;금액에&nbsp;대한&nbsp;현금영수증&nbsp;발행&nbsp;가능합니다.<br>-&nbsp;사용&nbsp;여부&nbsp;및&nbsp;모바일상품권&nbsp;관련&nbsp;문의는&nbsp;고객센터(02-598-9874)에서&nbsp;확인하실&nbsp;수&nbsp;있습니다.<br>-&nbsp;고객센터&nbsp;운영시간:&nbsp;평일&nbsp;09:00~18:00(주말&nbsp;및&nbsp;공휴일&nbsp;휴무)<br><br>[사용불가매장]&nbsp;<br>대구이월드점,&nbsp;부산홈플러스&nbsp;아시아드점,&nbsp;수원홈플러스영통점,&nbsp;부산역점,&nbsp;미군부대&nbsp;내&nbsp;매장         </p>"
    },
    {
      id: 460,
      productId: "0000003331",
      seller: 1,
      title: "이탈리안비엠티(15cm) 쿠키세트",
      price: 7300,
      image: "https://www.officecon.co.kr/common/file/download?uploadFullPath=/product/20210528/20210528094520_986a5004-8993-444e-81ca-a8011f2fb0bd.jpg",
      detail: "<p>[이용안내]         <p>          [오피스콘&nbsp;상품&nbsp;주문시&nbsp;유의사항]&nbsp;&nbsp;<br>■&nbsp;1회&nbsp;주문기준&nbsp;최대&nbsp;발송&nbsp;가능한&nbsp;수량은&nbsp;1건&nbsp;부터&nbsp;~&nbsp;1,000건&nbsp;까지&nbsp;입니다.<br>■&nbsp;휴대폰번호&nbsp;또는&nbsp;이메일주소&nbsp;중복&nbsp;수신&nbsp;허용&nbsp;건수&nbsp;각&nbsp;5개&nbsp;까지&nbsp;가능&nbsp;합니다.<br>■&nbsp;주문&nbsp;일시기준&nbsp;30일&nbsp;이내&nbsp;동일한&nbsp;휴대폰번호&nbsp;또는&nbsp;이메일주소&nbsp;로&nbsp;주문일&nbsp;기준&nbsp;월&nbsp;30회&nbsp;이상&nbsp;발송&nbsp;이력&nbsp;발생시&nbsp;주문&nbsp;불가&nbsp;수신정보&nbsp;리스트에&nbsp;자동&nbsp;등록&nbsp;되어&nbsp;해당&nbsp;수신정보로&nbsp;주문&nbsp;및&nbsp;발송&nbsp;불가&nbsp;합니다.<br>■&nbsp;해당&nbsp;상품은&nbsp;프로모션(B2B)&nbsp;전용&nbsp;상품으로&nbsp;유효기간&nbsp;연장&nbsp;불가,&nbsp;유효기간&nbsp;만료시&nbsp;환불&nbsp;불가&nbsp;합니다.<br>■&nbsp;시세&nbsp;차익을&nbsp;목적으로&nbsp;사용처에서&nbsp;구매하는&nbsp;경우&nbsp;주문취소&nbsp;및&nbsp;서비스이용이&nbsp;제한될&nbsp;수&nbsp;있습니다.<br><br>[유의사항]<br>-&nbsp;본&nbsp;쿠폰은&nbsp;해당&nbsp;상품으로만&nbsp;교환이&nbsp;가능&nbsp;합니다.&nbsp;<br>-&nbsp;단,&nbsp;매장&nbsp;별&nbsp;재고&nbsp;상황에&nbsp;따라&nbsp;해당&nbsp;제품으로&nbsp;교환이&nbsp;불가능&nbsp;할&nbsp;경우&nbsp;동일&nbsp;가격&nbsp;또는&nbsp;그&nbsp;이상의&nbsp;제품으로만&nbsp;교환&nbsp;가능&nbsp;합니다.<br>-&nbsp;결제&nbsp;시&nbsp;모바일&nbsp;쿠폰을&nbsp;제시해&nbsp;주세요.<br>-&nbsp;모바일&nbsp;금액권&nbsp;중복&nbsp;사용이&nbsp;가능합니다.<br>-&nbsp;해당&nbsp;제품이&nbsp;할인&nbsp;행사&nbsp;품목에&nbsp;해당될&nbsp;경우&nbsp;행사가격으로&nbsp;구매하실&nbsp;수&nbsp;있으나&nbsp;권면가액&nbsp;또는&nbsp;그&nbsp;이상으로만&nbsp;결제가&nbsp;가능합니다.<br>&nbsp;-&nbsp;웨지&nbsp;세트는&nbsp;오전&nbsp;11시&nbsp;이후에만&nbsp;구매&nbsp;하실&nbsp;수&nbsp;있습니다.&nbsp;<br>-&nbsp;사전에&nbsp;고지된&nbsp;일부&nbsp;이벤트에&nbsp;한하여&nbsp;모바일&nbsp;상품권&nbsp;사용이&nbsp;제한될&nbsp;수&nbsp;있습니다.<br>-&nbsp;매장&nbsp;방문&nbsp;시에만&nbsp;사용&nbsp;가능합니다.<br>-&nbsp;사용&nbsp;금액에&nbsp;대한&nbsp;현금영수증&nbsp;발행&nbsp;가능합니다.<br>-&nbsp;사용&nbsp;여부&nbsp;및&nbsp;모바일상품권&nbsp;관련&nbsp;문의는&nbsp;고객센터(02-598-9874)에서&nbsp;확인하실&nbsp;수&nbsp;있습니다.<br>-&nbsp;고객센터&nbsp;운영시간:&nbsp;평일&nbsp;09:00~18:00(주말&nbsp;및&nbsp;공휴일&nbsp;휴무)<br><br>[사용불가매장]&nbsp;<br>대구이월드점,&nbsp;부산홈플러스&nbsp;아시아드점,&nbsp;수원홈플러스영통점,&nbsp;부산역점,&nbsp;미군부대&nbsp;내&nbsp;매장         </p>"
    },
    {
      id: 456,
      productId: "0000002157",
      seller: 1,
      title: "에그마요(15cm) 쿠키세트",
      price: 6200,
      image: "https://www.officecon.co.kr/common/file/download?uploadFullPath=/product/20201216/20201216110013_f0a5228f-bb04-44f2-90e2-777d74a364fe.jpg",
      detail: "<p>[이용안내]         <p>          ※&nbsp;오피스콘&nbsp;상품&nbsp;주문시&nbsp;유의사항<br>■&nbsp;1회&nbsp;주문시&nbsp;최대&nbsp;발송&nbsp;가능한&nbsp;수량은&nbsp;1건&nbsp;부터&nbsp;~&nbsp;1,000건&nbsp;까지&nbsp;입니다.<br>■&nbsp;동일한&nbsp;휴대폰번호&nbsp;또는&nbsp;이메일&nbsp;주소&nbsp;발송은&nbsp;ID별&nbsp;최대&nbsp;5개&nbsp;까지만&nbsp;발송&nbsp;가능&nbsp;합니다.<br>■&nbsp;30일&nbsp;이내&nbsp;동일한&nbsp;휴대폰번호&nbsp;또는&nbsp;이메일&nbsp;주소&nbsp;로&nbsp;30회&nbsp;이상&nbsp;발송&nbsp;이력&nbsp;발생시&nbsp;주문&nbsp;불가&nbsp;수신정보&nbsp;리스트에&nbsp;자동&nbsp;등록&nbsp;되어&nbsp;해당&nbsp;수신정보로&nbsp;주문&nbsp;및&nbsp;발송&nbsp;불가&nbsp;합니다.<br>■&nbsp;해당&nbsp;상품은&nbsp;프로모션(B2B)&nbsp;발송상품으로&nbsp;유효기간&nbsp;연장&nbsp;및&nbsp;환불&nbsp;불가&nbsp;합니다.<br>■&nbsp;시세&nbsp;차익을&nbsp;목적으로&nbsp;사용처에서&nbsp;구매하는&nbsp;경우&nbsp;주문취소&nbsp;및&nbsp;서비스이용이&nbsp;제한될&nbsp;수&nbsp;있습니다.<br><br>[유의사항]<br>-&nbsp;본&nbsp;쿠폰은&nbsp;해당&nbsp;상품으로만&nbsp;교환이&nbsp;가능&nbsp;합니다.&nbsp;<br>-&nbsp;단,&nbsp;매장&nbsp;별&nbsp;재고&nbsp;상황에&nbsp;따라&nbsp;해당&nbsp;제품으로&nbsp;교환이&nbsp;불가능&nbsp;할&nbsp;경우&nbsp;동일&nbsp;가격&nbsp;또는&nbsp;그&nbsp;이상의&nbsp;제품으로만&nbsp;교환&nbsp;가능&nbsp;합니다.<br>-&nbsp;결제&nbsp;시&nbsp;모바일&nbsp;쿠폰을&nbsp;제시해&nbsp;주세요.<br>-&nbsp;모바일&nbsp;금액권&nbsp;중복&nbsp;사용이&nbsp;가능합니다.<br>-&nbsp;해당&nbsp;제품이&nbsp;할인&nbsp;행사&nbsp;품목에&nbsp;해당될&nbsp;경우&nbsp;행사가격으로&nbsp;구매하실&nbsp;수&nbsp;있으나&nbsp;권면가액&nbsp;또는&nbsp;그&nbsp;이상으로만&nbsp;결제가&nbsp;가능합니다.<br>&nbsp;-&nbsp;웨지&nbsp;세트는&nbsp;오전&nbsp;11시&nbsp;이후에만&nbsp;구매&nbsp;하실&nbsp;수&nbsp;있습니다.&nbsp;<br>-&nbsp;사전에&nbsp;고지된&nbsp;일부&nbsp;이벤트에&nbsp;한하여&nbsp;모바일&nbsp;상품권&nbsp;사용이&nbsp;제한될&nbsp;수&nbsp;있습니다.<br>-&nbsp;매장&nbsp;방문&nbsp;시에만&nbsp;사용&nbsp;가능합니다.<br>-&nbsp;사용&nbsp;금액에&nbsp;대한&nbsp;현금영수증&nbsp;발행&nbsp;가능합니다.<br>-&nbsp;사용&nbsp;여부&nbsp;및&nbsp;모바일상품권&nbsp;관련&nbsp;문의는&nbsp;고객센터(02-598-9874)에서&nbsp;확인하실&nbsp;수&nbsp;있습니다.<br>-&nbsp;고객센터&nbsp;운영시간:&nbsp;평일&nbsp;09:00~18:00(주말&nbsp;및&nbsp;공휴일&nbsp;휴무)<br><br>[사용불가매장]&nbsp;<br>대구이월드점,&nbsp;부산홈플러스&nbsp;아시아드점,&nbsp;수원홈플러스영통점,&nbsp;부산역점,&nbsp;미군부대&nbsp;내&nbsp;매장         </p>"
    },
    {
      id: 414,
      productId: "0000002343",
      seller: 1,
      title: "코카콜라슬림캔250ML",
      price: 1500,
      image: "https://www.officecon.co.kr/common/file/download?uploadFullPath=/product/20210106/20210106181816_792b0fe6-8cc3-44e1-8093-1c9c19c37995.jpg",
      detail: "<p>[이용안내]         <p>          ※&nbsp;오피스콘&nbsp;상품&nbsp;주문시&nbsp;유의사항<br>■&nbsp;1회&nbsp;주문시&nbsp;최대&nbsp;발송&nbsp;가능한&nbsp;수량은&nbsp;1건&nbsp;부터&nbsp;~&nbsp;1,000건&nbsp;까지&nbsp;입니다.<br>■&nbsp;동일한&nbsp;휴대폰번호&nbsp;또는&nbsp;이메일&nbsp;주소&nbsp;발송은&nbsp;ID별&nbsp;최대&nbsp;5개&nbsp;까지만&nbsp;발송&nbsp;가능&nbsp;합니다.<br>■&nbsp;30일&nbsp;이내&nbsp;동일한&nbsp;휴대폰번호&nbsp;또는&nbsp;이메일&nbsp;주소&nbsp;로&nbsp;30회&nbsp;이상&nbsp;발송&nbsp;이력&nbsp;발생시&nbsp;주문&nbsp;불가&nbsp;수신정보&nbsp;리스트에&nbsp;자동&nbsp;등록&nbsp;되어&nbsp;해당&nbsp;수신정보로&nbsp;주문&nbsp;및&nbsp;발송&nbsp;불가&nbsp;합니다.<br>■&nbsp;해당&nbsp;상품은&nbsp;프로모션(B2B)&nbsp;발송상품으로&nbsp;유효기간&nbsp;연장&nbsp;및&nbsp;환불&nbsp;불가&nbsp;합니다.<br>■&nbsp;시세&nbsp;차익을&nbsp;목적으로&nbsp;사용처에서&nbsp;구매하는&nbsp;경우&nbsp;주문취소&nbsp;및&nbsp;서비스이용이&nbsp;제한될&nbsp;수&nbsp;있습니다.<br><br>[상품이용안내]<br>■&nbsp;전국&nbsp;GS25&nbsp;매장에서&nbsp;이용&nbsp;가능합니다.<br>■&nbsp;전국&nbsp;GS25&nbsp;매장위치는&nbsp;홈페이지에서&nbsp;확인&nbsp;가능<br>(http://gs25.gsretail.com)<br>■&nbsp;특수점포&nbsp;사용불가(군부대/고속도로&nbsp;휴게소&nbsp;등)<br>■&nbsp;일부&nbsp;GS25&nbsp;매장에서는&nbsp;취급하지&nbsp;않는&nbsp;상품일&nbsp;수&nbsp;있습니다.<br>■&nbsp;매장&nbsp;내&nbsp;행사&nbsp;(1+1,&nbsp;2+1)증정상품&nbsp;적용&nbsp;가능&nbsp;(단,&nbsp;매장&nbsp;행사&nbsp;기간&nbsp;중에만&nbsp;적용&nbsp;가능)<br>예)&nbsp;증정상품&nbsp;1+1의&nbsp;경우<br>■&nbsp;모바일쿠폰&nbsp;1개를&nbsp;결제하면,&nbsp;1+1이&nbsp;적용되어&nbsp;2개&nbsp;상품&nbsp;교환&nbsp;가능합니다.<br>예)&nbsp;증정상품&nbsp;2+1의&nbsp;경우<br>■&nbsp;모바일쿠폰&nbsp;2개를&nbsp;결제하면,&nbsp;2+1이&nbsp;적용되어&nbsp;3개&nbsp;상품&nbsp;교환&nbsp;가능합니다.<br>단,&nbsp;모바일쿠폰&nbsp;1개와&nbsp;점포에서&nbsp;추가로&nbsp;1개를&nbsp;구입하여&nbsp;결제시에는&nbsp;2+1&nbsp;적용이&nbsp;되지&nbsp;않습니다.<br>■&nbsp;할인&nbsp;및&nbsp;적립은&nbsp;브랜드사의&nbsp;정책을&nbsp;따르고&nbsp;있으며,&nbsp;자세한&nbsp;사항은&nbsp;GS25에&nbsp;문의해주십시오.<br>■&nbsp;결제&nbsp;방법은&nbsp;아래와&nbsp;같습니다.<br>객층키&gt;&nbsp;쿠폰바코드&nbsp;스캐닝(스캐닝&nbsp;안될시&nbsp;쿠폰번호&nbsp;수기입력)&gt;&nbsp;등록키&nbsp;입력<br>■&nbsp;B2B용(무상제공)&nbsp;제공&nbsp;시,&nbsp;유효기간&nbsp;연장&nbsp;및&nbsp;환불&nbsp;대상이&nbsp;아닙니다.         </p>"
    },
    {
      id: 471,
      productId: "0000002748",
      seller: 1,
      title: "매일)허쉬초코드링크235ml",
      price: 1200,
      image: "https://www.officecon.co.kr/common/file/download?uploadFullPath=/product/20210224/20210224102557_ca5c6e9d-bfcc-4443-b7fa-2d152e6ae249.jpg",
      detail: "<p>[이용안내]         <p>          ※&nbsp;오피스콘&nbsp;상품&nbsp;주문시&nbsp;유의사항<br>■&nbsp;1회&nbsp;주문시&nbsp;최대&nbsp;발송&nbsp;가능한&nbsp;수량은&nbsp;1건&nbsp;부터&nbsp;~&nbsp;1,000건&nbsp;까지&nbsp;입니다.<br>■&nbsp;동일한&nbsp;휴대폰번호&nbsp;또는&nbsp;이메일&nbsp;주소&nbsp;발송은&nbsp;ID별&nbsp;최대&nbsp;5개&nbsp;까지만&nbsp;발송&nbsp;가능&nbsp;합니다.<br>■&nbsp;주문&nbsp;일시기준&nbsp;30일&nbsp;이내&nbsp;동일한&nbsp;휴대폰번호&nbsp;또는&nbsp;이메일&nbsp;주소&nbsp;로&nbsp;30회&nbsp;이상&nbsp;발송&nbsp;이력&nbsp;발생시&nbsp;주문&nbsp;불가&nbsp;수신정보&nbsp;리스트에&nbsp;자동&nbsp;등록&nbsp;되어&nbsp;해당&nbsp;수신정보로&nbsp;주문&nbsp;및&nbsp;발송&nbsp;불가&nbsp;합니다.<br>■&nbsp;프로모션(B2B)&nbsp;발송상품으로&nbsp;유효기간&nbsp;연장&nbsp;및&nbsp;환불&nbsp;불가&nbsp;합니다.<br>■&nbsp;시세&nbsp;차익을&nbsp;목적으로&nbsp;사용처에서&nbsp;구매하는&nbsp;경우&nbsp;주문취소&nbsp;및&nbsp;서비스이용이&nbsp;제한될&nbsp;수&nbsp;있습니다.<br><br>▶상품설명&nbsp;<br>-&nbsp;전국&nbsp;CU&nbsp;매장에서&nbsp;상품교환이&nbsp;가능한&nbsp;모바일교환권입니다.&nbsp;(일부매장제외)<br><br>▶유의사항&nbsp;<br>일부&nbsp;특수점포에서는&nbsp;교환권&nbsp;사용이&nbsp;불가&nbsp;할&nbsp;수&nbsp;있습니다.<br>번호이동&nbsp;불가&nbsp;및&nbsp;유효기간&nbsp;만료이후&nbsp;사용이&nbsp;불가합니다.<br>매장&nbsp;내&nbsp;행사(1+1&nbsp;,&nbsp;2+1)&nbsp;증정상품&nbsp;적용&nbsp;가능&nbsp;(단,&nbsp;매장&nbsp;행사기간중에만&nbsp;적용&nbsp;가능)<br>예)&nbsp;증정상품&nbsp;1+1의&nbsp;경우&nbsp;모바일쿠폰&nbsp;1개를&nbsp;결제하면,&nbsp;1+1이&nbsp;적용되어&nbsp;2개&nbsp;상품&nbsp;교환&nbsp;가능<br>예)&nbsp;증정상품&nbsp;2+1의&nbsp;경우&nbsp;모바일쿠폰&nbsp;2개&nbsp;결제하면,&nbsp;2+1이&nbsp;적용&nbsp;되어&nbsp;3개&nbsp;상품&nbsp;교환&nbsp;가능&nbsp;<br>-&nbsp;결제시&nbsp;상품&nbsp;선택&nbsp;후&nbsp;이미지&nbsp;제시&nbsp;바랍니다.<br>-&nbsp;제휴&nbsp;및&nbsp;할인은&nbsp;CU&nbsp;브랜드사&nbsp;정책에&nbsp;따르고&nbsp;있습니다.<br>-&nbsp;현금과&nbsp;교환불가&nbsp;입니다.<br>-&nbsp;바코드인식이&nbsp;안&nbsp;될&nbsp;경우,&nbsp;바코드&nbsp;하단의&nbsp;번호를&nbsp;입력하여&nbsp;결제&nbsp;가능합니다.<br>-&nbsp;해당&nbsp;쿠폰은&nbsp;B2B상품으로&nbsp;유효기간&nbsp;연장&nbsp;및&nbsp;환불이&nbsp;불가합니다.<br><br>☎스마일콘&nbsp;고객센터&nbsp;:&nbsp;1661-8191<br>(영업시간&nbsp;:&nbsp;오전&nbsp;9시&nbsp;30분&nbsp;~&nbsp;18시&lt;주말,공휴일&nbsp;제외&gt;)         </p>"
    },
    {
      id: 469,
      productId: "0000002691",
      seller: 1,
      title: "롯데)ABC초코쿠키50g",
      price: 1000,
      image: "https://www.officecon.co.kr/common/file/download?uploadFullPath=/product/20210224/20210224143501_db859f03-3aab-4040-944e-776454dd17c2.jpg",
      detail: "<p>[이용안내]         <p>          ※&nbsp;오피스콘&nbsp;상품&nbsp;주문시&nbsp;유의사항<br>■&nbsp;1회&nbsp;주문시&nbsp;최대&nbsp;발송&nbsp;가능한&nbsp;수량은&nbsp;1건&nbsp;부터&nbsp;~&nbsp;1,000건&nbsp;까지&nbsp;입니다.<br>■&nbsp;동일한&nbsp;휴대폰번호&nbsp;또는&nbsp;이메일&nbsp;주소&nbsp;발송은&nbsp;ID별&nbsp;최대&nbsp;5개&nbsp;까지만&nbsp;발송&nbsp;가능&nbsp;합니다.<br>■&nbsp;주문&nbsp;일시기준&nbsp;30일&nbsp;이내&nbsp;동일한&nbsp;휴대폰번호&nbsp;또는&nbsp;이메일&nbsp;주소&nbsp;로&nbsp;30회&nbsp;이상&nbsp;발송&nbsp;이력&nbsp;발생시&nbsp;주문&nbsp;불가&nbsp;수신정보&nbsp;리스트에&nbsp;자동&nbsp;등록&nbsp;되어&nbsp;해당&nbsp;수신정보로&nbsp;주문&nbsp;및&nbsp;발송&nbsp;불가&nbsp;합니다.<br>■&nbsp;프로모션(B2B)&nbsp;발송상품으로&nbsp;유효기간&nbsp;연장&nbsp;및&nbsp;환불&nbsp;불가&nbsp;합니다.<br>■&nbsp;시세&nbsp;차익을&nbsp;목적으로&nbsp;사용처에서&nbsp;구매하는&nbsp;경우&nbsp;주문취소&nbsp;및&nbsp;서비스이용이&nbsp;제한될&nbsp;수&nbsp;있습니다.<br><br>▶상품설명&nbsp;<br>-&nbsp;전국&nbsp;CU&nbsp;매장에서&nbsp;상품교환이&nbsp;가능한&nbsp;모바일교환권입니다.&nbsp;(일부매장제외)<br><br>▶유의사항&nbsp;<br>일부&nbsp;특수점포에서는&nbsp;교환권&nbsp;사용이&nbsp;불가&nbsp;할&nbsp;수&nbsp;있습니다.<br>번호이동&nbsp;불가&nbsp;및&nbsp;유효기간&nbsp;만료이후&nbsp;사용이&nbsp;불가합니다.<br>매장&nbsp;내&nbsp;행사(1+1&nbsp;,&nbsp;2+1)&nbsp;증정상품&nbsp;적용&nbsp;가능&nbsp;(단,&nbsp;매장&nbsp;행사기간중에만&nbsp;적용&nbsp;가능)<br>예)&nbsp;증정상품&nbsp;1+1의&nbsp;경우&nbsp;모바일쿠폰&nbsp;1개를&nbsp;결제하면,&nbsp;1+1이&nbsp;적용되어&nbsp;2개&nbsp;상품&nbsp;교환&nbsp;가능<br>예)&nbsp;증정상품&nbsp;2+1의&nbsp;경우&nbsp;모바일쿠폰&nbsp;2개&nbsp;결제하면,&nbsp;2+1이&nbsp;적용&nbsp;되어&nbsp;3개&nbsp;상품&nbsp;교환&nbsp;가능&nbsp;<br>-&nbsp;결제시&nbsp;상품&nbsp;선택&nbsp;후&nbsp;이미지&nbsp;제시&nbsp;바랍니다.<br>-&nbsp;제휴&nbsp;및&nbsp;할인은&nbsp;CU&nbsp;브랜드사&nbsp;정책에&nbsp;따르고&nbsp;있습니다.<br>-&nbsp;현금과&nbsp;교환불가&nbsp;입니다.<br>-&nbsp;바코드인식이&nbsp;안&nbsp;될&nbsp;경우,&nbsp;바코드&nbsp;하단의&nbsp;번호를&nbsp;입력하여&nbsp;결제&nbsp;가능합니다.<br>-&nbsp;해당&nbsp;쿠폰은&nbsp;B2B상품으로&nbsp;유효기간&nbsp;연장&nbsp;및&nbsp;환불이&nbsp;불가합니다.<br><br>☎스마일콘&nbsp;고객센터&nbsp;:&nbsp;1661-8191<br>(영업시간&nbsp;:&nbsp;오전&nbsp;9시&nbsp;30분&nbsp;~&nbsp;18시&lt;주말,공휴일&nbsp;제외&gt;)         </p>"
    }
  ]
}

const myBoxResult: OpenResult = {
  id: 446,
  boxId: 110,
  userId: "f3940067249449200",
  itemId: 471,
  openAt: "Sun Nov 07 2021 05:31:55 GMT+0000 (Coordinated Universal Time)",
  user: {
    id: "f3940067249449200",
    nickname: "토끼",
    email: "wlals6105@naver.com",
    point: 991900,
    isManager: false
  },
  item: {
    id: 471,
    productId: "0000002748",
    seller: 1,
    title: "매일)허쉬초코드링크235ml",
    price: 1200,
    image: "https://www.officecon.co.kr/common/file/download?uploadFullPath=/product/20210224/20210224102557_ca5c6e9d-bfcc-4443-b7fa-2d152e6ae249.jpg",
    detail: "<p>[이용안내]         <p>          ※&nbsp;오피스콘&nbsp;상품&nbsp;주문시&nbsp;유의사항<br>■&nbsp;1회&nbsp;주문시&nbsp;최대&nbsp;발송&nbsp;가능한&nbsp;수량은&nbsp;1건&nbsp;부터&nbsp;~&nbsp;1,000건&nbsp;까지&nbsp;입니다.<br>■&nbsp;동일한&nbsp;휴대폰번호&nbsp;또는&nbsp;이메일&nbsp;주소&nbsp;발송은&nbsp;ID별&nbsp;최대&nbsp;5개&nbsp;까지만&nbsp;발송&nbsp;가능&nbsp;합니다.<br>■&nbsp;주문&nbsp;일시기준&nbsp;30일&nbsp;이내&nbsp;동일한&nbsp;휴대폰번호&nbsp;또는&nbsp;이메일&nbsp;주소&nbsp;로&nbsp;30회&nbsp;이상&nbsp;발송&nbsp;이력&nbsp;발생시&nbsp;주문&nbsp;불가&nbsp;수신정보&nbsp;리스트에&nbsp;자동&nbsp;등록&nbsp;되어&nbsp;해당&nbsp;수신정보로&nbsp;주문&nbsp;및&nbsp;발송&nbsp;불가&nbsp;합니다.<br>■&nbsp;프로모션(B2B)&nbsp;발송상품으로&nbsp;유효기간&nbsp;연장&nbsp;및&nbsp;환불&nbsp;불가&nbsp;합니다.<br>■&nbsp;시세&nbsp;차익을&nbsp;목적으로&nbsp;사용처에서&nbsp;구매하는&nbsp;경우&nbsp;주문취소&nbsp;및&nbsp;서비스이용이&nbsp;제한될&nbsp;수&nbsp;있습니다.<br><br>▶상품설명&nbsp;<br>-&nbsp;전국&nbsp;CU&nbsp;매장에서&nbsp;상품교환이&nbsp;가능한&nbsp;모바일교환권입니다.&nbsp;(일부매장제외)<br><br>▶유의사항&nbsp;<br>일부&nbsp;특수점포에서는&nbsp;교환권&nbsp;사용이&nbsp;불가&nbsp;할&nbsp;수&nbsp;있습니다.<br>번호이동&nbsp;불가&nbsp;및&nbsp;유효기간&nbsp;만료이후&nbsp;사용이&nbsp;불가합니다.<br>매장&nbsp;내&nbsp;행사(1+1&nbsp;,&nbsp;2+1)&nbsp;증정상품&nbsp;적용&nbsp;가능&nbsp;(단,&nbsp;매장&nbsp;행사기간중에만&nbsp;적용&nbsp;가능)<br>예)&nbsp;증정상품&nbsp;1+1의&nbsp;경우&nbsp;모바일쿠폰&nbsp;1개를&nbsp;결제하면,&nbsp;1+1이&nbsp;적용되어&nbsp;2개&nbsp;상품&nbsp;교환&nbsp;가능<br>예)&nbsp;증정상품&nbsp;2+1의&nbsp;경우&nbsp;모바일쿠폰&nbsp;2개&nbsp;결제하면,&nbsp;2+1이&nbsp;적용&nbsp;되어&nbsp;3개&nbsp;상품&nbsp;교환&nbsp;가능&nbsp;<br>-&nbsp;결제시&nbsp;상품&nbsp;선택&nbsp;후&nbsp;이미지&nbsp;제시&nbsp;바랍니다.<br>-&nbsp;제휴&nbsp;및&nbsp;할인은&nbsp;CU&nbsp;브랜드사&nbsp;정책에&nbsp;따르고&nbsp;있습니다.<br>-&nbsp;현금과&nbsp;교환불가&nbsp;입니다.<br>-&nbsp;바코드인식이&nbsp;안&nbsp;될&nbsp;경우,&nbsp;바코드&nbsp;하단의&nbsp;번호를&nbsp;입력하여&nbsp;결제&nbsp;가능합니다.<br>-&nbsp;해당&nbsp;쿠폰은&nbsp;B2B상품으로&nbsp;유효기간&nbsp;연장&nbsp;및&nbsp;환불이&nbsp;불가합니다.<br><br>☎스마일콘&nbsp;고객센터&nbsp;:&nbsp;1661-8191<br>(영업시간&nbsp;:&nbsp;오전&nbsp;9시&nbsp;30분&nbsp;~&nbsp;18시&lt;주말,공휴일&nbsp;제외&gt;)         </p>"
  }
}

const lotteriaResult1: OpenResult = {
  id: 445,
  boxId: 97,
  userId: "f3940067249449200",
  itemId: 488,
  openAt: "Sun Nov 07 2021 05:23:26 GMT+0000 (Coordinated Universal Time)",
  user: {
    id: "f3940067249449200",
    nickname: "토끼",
    email: "wlals6105@naver.com",
    point: 991900,
    isManager: false
  },
  item: {
    id: 488,
    productId: "0000003394",
    seller: 1,
    title: "치즈스틱",
    price: 2000,
    image: "https://www.officecon.co.kr/common/file/download?uploadFullPath=/product/20210602/20210602144728_a467b9a2-82b4-4481-85c8-bc9a241ed2b9.jpg",
    detail: "<p>[이용안내]         <p>          [오피스콘&nbsp;상품&nbsp;주문시&nbsp;유의사항]&nbsp;&nbsp;<br>■&nbsp;1회&nbsp;주문기준&nbsp;최대&nbsp;발송&nbsp;가능한&nbsp;수량은&nbsp;1건&nbsp;부터&nbsp;~&nbsp;1,000건&nbsp;까지&nbsp;입니다.<br>■&nbsp;휴대폰번호&nbsp;또는&nbsp;이메일주소&nbsp;중복&nbsp;수신&nbsp;허용&nbsp;건수&nbsp;각&nbsp;5개&nbsp;까지&nbsp;가능&nbsp;합니다.<br>■&nbsp;주문&nbsp;일시기준&nbsp;30일&nbsp;이내&nbsp;동일한&nbsp;휴대폰번호&nbsp;또는&nbsp;이메일주소&nbsp;로&nbsp;주문일&nbsp;기준&nbsp;월&nbsp;30회&nbsp;이상&nbsp;발송&nbsp;이력&nbsp;발생시&nbsp;주문&nbsp;불가&nbsp;수신정보&nbsp;리스트에&nbsp;자동&nbsp;등록&nbsp;되어&nbsp;해당&nbsp;수신정보로&nbsp;주문&nbsp;및&nbsp;발송&nbsp;불가&nbsp;합니다.<br>■&nbsp;해당&nbsp;상품은&nbsp;프로모션(B2B)&nbsp;전용&nbsp;상품으로&nbsp;유효기간&nbsp;연장&nbsp;불가,&nbsp;유효기간&nbsp;만료시&nbsp;환불&nbsp;불가&nbsp;합니다.<br>■&nbsp;시세&nbsp;차익을&nbsp;목적으로&nbsp;사용처에서&nbsp;구매하는&nbsp;경우&nbsp;주문취소&nbsp;및&nbsp;서비스이용이&nbsp;제한될&nbsp;수&nbsp;있습니다.<br><br>[이용&nbsp;안내]<br>1.&nbsp;본&nbsp;상품은&nbsp;매장&nbsp;재고&nbsp;상황에&nbsp;따라&nbsp;동일상품으로&nbsp;교환이&nbsp;불가능할&nbsp;수&nbsp;있습니다.<br>2.&nbsp;매장&nbsp;별&nbsp;재고&nbsp;상황에&nbsp;따라&nbsp;동일금액의&nbsp;타&nbsp;상품으로&nbsp;교환이&nbsp;가능하며,<br>해당&nbsp;금액보다&nbsp;높을&nbsp;경우&nbsp;초과금액을&nbsp;결제하시면&nbsp;교환&nbsp;가능&nbsp;합니다.<br>3.&nbsp;본&nbsp;쿠폰&nbsp;교환&nbsp;시&nbsp;L.POINT&nbsp;적립&nbsp;및&nbsp;현금영수증&nbsp;발행&nbsp;가능&nbsp;합니다.<br>4.&nbsp;타&nbsp;행사와&nbsp;중복적용은&nbsp;브랜드사&nbsp;정책에&nbsp;따릅니다.<br>5.&nbsp;유효기간&nbsp;이내&nbsp;사용&nbsp;가능합니다.<br>6.&nbsp;매장&nbsp;방문&nbsp;주문&nbsp;시에만&nbsp;사용&nbsp;가능&nbsp;합니다.<br>7.&nbsp;상기&nbsp;이미지는&nbsp;연출된&nbsp;것으로&nbsp;실제와&nbsp;다를&nbsp;수&nbsp;있습니다.<br>8.&nbsp;홈서비스(배달),&nbsp;잇츠오더에서&nbsp;사용&nbsp;불가합니다.<br>9.&nbsp;환불,&nbsp;교환,&nbsp;승인에&nbsp;대한&nbsp;문의는&nbsp;쿠폰&nbsp;구매처에&nbsp;문의주시기&nbsp;바랍니다.<br>(롯데리아는&nbsp;쿠폰의&nbsp;구매처가&nbsp;아니고&nbsp;사용처&nbsp;입니다.)<br><br>*본&nbsp;모바일&nbsp;쿠폰은&nbsp;무상제공(B2B)&nbsp;발송&nbsp;상품으로&nbsp;유효기간&nbsp;연장&nbsp;및&nbsp;환불&nbsp;대상이&nbsp;아닙니다.<br><br>[이용가능매장&nbsp;안내]<br>■&nbsp;롯데리아&nbsp;국내&nbsp;전&nbsp;매장(단,&nbsp;공항,&nbsp;리조트&nbsp;및&nbsp;휴게소,&nbsp;위락시설&nbsp;주변매장&nbsp;등&nbsp;특수매장&nbsp;및&nbsp;일부점포&nbsp;제외)<br>■&nbsp;홈서비스(배달),&nbsp;잇츠오더&nbsp;제외         </p>"
  }
}

const lotteriaResult2: OpenResult = {
  id: 444,
  boxId: 97,
  userId: "f3940067249449200",
  itemId: 487,
  openAt: "Sun Nov 07 2021 05:23:26 GMT+0000 (Coordinated Universal Time)",
  user: {
    id: "f3940067249449200",
    nickname: "토끼",
    email: "wlals6105@naver.com",
    point: 991900,
    isManager: false
  },
  item: {
    id: 487,
    productId: "0000003434",
    seller: 1,
    title: "토네이도 초코쿠키",
    price: 2500,
    image: "https://www.officecon.co.kr/common/file/download?uploadFullPath=/product/20210602/20210602150959_abc63eb7-eb29-49ec-a186-a8a0703bf230.jpg",
    detail: "<p>[이용안내]         <p>          [오피스콘&nbsp;상품&nbsp;주문시&nbsp;유의사항]&nbsp;&nbsp;<br>■&nbsp;1회&nbsp;주문기준&nbsp;최대&nbsp;발송&nbsp;가능한&nbsp;수량은&nbsp;1건&nbsp;부터&nbsp;~&nbsp;1,000건&nbsp;까지&nbsp;입니다.<br>■&nbsp;휴대폰번호&nbsp;또는&nbsp;이메일주소&nbsp;중복&nbsp;수신&nbsp;허용&nbsp;건수&nbsp;각&nbsp;5개&nbsp;까지&nbsp;가능&nbsp;합니다.<br>■&nbsp;주문&nbsp;일시기준&nbsp;30일&nbsp;이내&nbsp;동일한&nbsp;휴대폰번호&nbsp;또는&nbsp;이메일주소&nbsp;로&nbsp;주문일&nbsp;기준&nbsp;월&nbsp;30회&nbsp;이상&nbsp;발송&nbsp;이력&nbsp;발생시&nbsp;주문&nbsp;불가&nbsp;수신정보&nbsp;리스트에&nbsp;자동&nbsp;등록&nbsp;되어&nbsp;해당&nbsp;수신정보로&nbsp;주문&nbsp;및&nbsp;발송&nbsp;불가&nbsp;합니다.<br>■&nbsp;해당&nbsp;상품은&nbsp;프로모션(B2B)&nbsp;전용&nbsp;상품으로&nbsp;유효기간&nbsp;연장&nbsp;불가,&nbsp;유효기간&nbsp;만료시&nbsp;환불&nbsp;불가&nbsp;합니다.<br>■&nbsp;시세&nbsp;차익을&nbsp;목적으로&nbsp;사용처에서&nbsp;구매하는&nbsp;경우&nbsp;주문취소&nbsp;및&nbsp;서비스이용이&nbsp;제한될&nbsp;수&nbsp;있습니다.<br><br>[이용&nbsp;안내]<br>1.&nbsp;본&nbsp;상품은&nbsp;매장&nbsp;재고&nbsp;상황에&nbsp;따라&nbsp;동일상품으로&nbsp;교환이&nbsp;불가능할&nbsp;수&nbsp;있습니다.<br>2.&nbsp;매장&nbsp;별&nbsp;재고&nbsp;상황에&nbsp;따라&nbsp;동일금액의&nbsp;타&nbsp;상품으로&nbsp;교환이&nbsp;가능하며,<br>해당&nbsp;금액보다&nbsp;높을&nbsp;경우&nbsp;초과금액을&nbsp;결제하시면&nbsp;교환&nbsp;가능&nbsp;합니다.<br>3.&nbsp;본&nbsp;쿠폰&nbsp;교환&nbsp;시&nbsp;L.POINT&nbsp;적립&nbsp;및&nbsp;현금영수증&nbsp;발행&nbsp;가능&nbsp;합니다.<br>4.&nbsp;타&nbsp;행사와&nbsp;중복적용은&nbsp;브랜드사&nbsp;정책에&nbsp;따릅니다.<br>5.&nbsp;유효기간&nbsp;이내&nbsp;사용&nbsp;가능합니다.<br>6.&nbsp;매장&nbsp;방문&nbsp;주문&nbsp;시에만&nbsp;사용&nbsp;가능&nbsp;합니다.<br>7.&nbsp;상기&nbsp;이미지는&nbsp;연출된&nbsp;것으로&nbsp;실제와&nbsp;다를&nbsp;수&nbsp;있습니다.<br>8.&nbsp;홈서비스(배달),&nbsp;잇츠오더에서&nbsp;사용&nbsp;불가합니다.<br>9.&nbsp;환불,&nbsp;교환,&nbsp;승인에&nbsp;대한&nbsp;문의는&nbsp;쿠폰&nbsp;구매처에&nbsp;문의주시기&nbsp;바랍니다.<br>(롯데리아는&nbsp;쿠폰의&nbsp;구매처가&nbsp;아니고&nbsp;사용처&nbsp;입니다.)<br><br>*본&nbsp;모바일&nbsp;쿠폰은&nbsp;무상제공(B2B)&nbsp;발송&nbsp;상품으로&nbsp;유효기간&nbsp;연장&nbsp;및&nbsp;환불&nbsp;대상이&nbsp;아닙니다.<br><br>[이용가능매장&nbsp;안내]<br>■&nbsp;롯데리아&nbsp;국내&nbsp;전&nbsp;매장(단,&nbsp;공항,&nbsp;리조트&nbsp;및&nbsp;휴게소,&nbsp;위락시설&nbsp;주변매장&nbsp;등&nbsp;특수매장&nbsp;및&nbsp;일부점포&nbsp;제외)<br>■&nbsp;홈서비스(배달),&nbsp;잇츠오더&nbsp;제외         </p>"
  }
}

const lotteriaResult3: OpenResult = {
  id: 443,
  boxId: 97,
  userId: "f3940067249449200",
  itemId: 488,
  openAt: "Sun Nov 07 2021 05:23:26 GMT+0000 (Coordinated Universal Time)",
  user: {
    id: "f3940067249449200",
    nickname: "토끼",
    email: "wlals6105@naver.com",
    point: 991900,
    isManager: false
  },
  item: {
    id: 488,
    productId: "0000003394",
    seller: 1,
    title: "치즈스틱",
    price: 2000,
    image: "https://www.officecon.co.kr/common/file/download?uploadFullPath=/product/20210602/20210602144728_a467b9a2-82b4-4481-85c8-bc9a241ed2b9.jpg",
    detail: "<p>[이용안내]         <p>          [오피스콘&nbsp;상품&nbsp;주문시&nbsp;유의사항]&nbsp;&nbsp;<br>■&nbsp;1회&nbsp;주문기준&nbsp;최대&nbsp;발송&nbsp;가능한&nbsp;수량은&nbsp;1건&nbsp;부터&nbsp;~&nbsp;1,000건&nbsp;까지&nbsp;입니다.<br>■&nbsp;휴대폰번호&nbsp;또는&nbsp;이메일주소&nbsp;중복&nbsp;수신&nbsp;허용&nbsp;건수&nbsp;각&nbsp;5개&nbsp;까지&nbsp;가능&nbsp;합니다.<br>■&nbsp;주문&nbsp;일시기준&nbsp;30일&nbsp;이내&nbsp;동일한&nbsp;휴대폰번호&nbsp;또는&nbsp;이메일주소&nbsp;로&nbsp;주문일&nbsp;기준&nbsp;월&nbsp;30회&nbsp;이상&nbsp;발송&nbsp;이력&nbsp;발생시&nbsp;주문&nbsp;불가&nbsp;수신정보&nbsp;리스트에&nbsp;자동&nbsp;등록&nbsp;되어&nbsp;해당&nbsp;수신정보로&nbsp;주문&nbsp;및&nbsp;발송&nbsp;불가&nbsp;합니다.<br>■&nbsp;해당&nbsp;상품은&nbsp;프로모션(B2B)&nbsp;전용&nbsp;상품으로&nbsp;유효기간&nbsp;연장&nbsp;불가,&nbsp;유효기간&nbsp;만료시&nbsp;환불&nbsp;불가&nbsp;합니다.<br>■&nbsp;시세&nbsp;차익을&nbsp;목적으로&nbsp;사용처에서&nbsp;구매하는&nbsp;경우&nbsp;주문취소&nbsp;및&nbsp;서비스이용이&nbsp;제한될&nbsp;수&nbsp;있습니다.<br><br>[이용&nbsp;안내]<br>1.&nbsp;본&nbsp;상품은&nbsp;매장&nbsp;재고&nbsp;상황에&nbsp;따라&nbsp;동일상품으로&nbsp;교환이&nbsp;불가능할&nbsp;수&nbsp;있습니다.<br>2.&nbsp;매장&nbsp;별&nbsp;재고&nbsp;상황에&nbsp;따라&nbsp;동일금액의&nbsp;타&nbsp;상품으로&nbsp;교환이&nbsp;가능하며,<br>해당&nbsp;금액보다&nbsp;높을&nbsp;경우&nbsp;초과금액을&nbsp;결제하시면&nbsp;교환&nbsp;가능&nbsp;합니다.<br>3.&nbsp;본&nbsp;쿠폰&nbsp;교환&nbsp;시&nbsp;L.POINT&nbsp;적립&nbsp;및&nbsp;현금영수증&nbsp;발행&nbsp;가능&nbsp;합니다.<br>4.&nbsp;타&nbsp;행사와&nbsp;중복적용은&nbsp;브랜드사&nbsp;정책에&nbsp;따릅니다.<br>5.&nbsp;유효기간&nbsp;이내&nbsp;사용&nbsp;가능합니다.<br>6.&nbsp;매장&nbsp;방문&nbsp;주문&nbsp;시에만&nbsp;사용&nbsp;가능&nbsp;합니다.<br>7.&nbsp;상기&nbsp;이미지는&nbsp;연출된&nbsp;것으로&nbsp;실제와&nbsp;다를&nbsp;수&nbsp;있습니다.<br>8.&nbsp;홈서비스(배달),&nbsp;잇츠오더에서&nbsp;사용&nbsp;불가합니다.<br>9.&nbsp;환불,&nbsp;교환,&nbsp;승인에&nbsp;대한&nbsp;문의는&nbsp;쿠폰&nbsp;구매처에&nbsp;문의주시기&nbsp;바랍니다.<br>(롯데리아는&nbsp;쿠폰의&nbsp;구매처가&nbsp;아니고&nbsp;사용처&nbsp;입니다.)<br><br>*본&nbsp;모바일&nbsp;쿠폰은&nbsp;무상제공(B2B)&nbsp;발송&nbsp;상품으로&nbsp;유효기간&nbsp;연장&nbsp;및&nbsp;환불&nbsp;대상이&nbsp;아닙니다.<br><br>[이용가능매장&nbsp;안내]<br>■&nbsp;롯데리아&nbsp;국내&nbsp;전&nbsp;매장(단,&nbsp;공항,&nbsp;리조트&nbsp;및&nbsp;휴게소,&nbsp;위락시설&nbsp;주변매장&nbsp;등&nbsp;특수매장&nbsp;및&nbsp;일부점포&nbsp;제외)<br>■&nbsp;홈서비스(배달),&nbsp;잇츠오더&nbsp;제외         </p>"
  }
}

const cuChocoResult: OpenResult = {
  id: 442,
  boxId: 93,
  userId: "f3940067249449200",
  itemId: 472,
  openAt: "Sun Nov 07 2021 05:21:03 GMT+0000 (Coordinated Universal Time)",
  user: {
    id: "f3940067249449200",
    nickname: "토끼",
    email: "wlals6105@naver.com",
    point: 991900,
    isManager: false
  },
  item: {
    id: 472,
    productId: "0000002696",
    seller: 1,
    title: "마즈)트윅스쿠키",
    price: 1200,
    image: "https://www.officecon.co.kr/common/file/download?uploadFullPath=/product/20210224/20210224142937_dc21a251-dee1-4b87-be52-289007d0d128.jpg",
    detail: "<p>[이용안내]         <p>          ※&nbsp;오피스콘&nbsp;상품&nbsp;주문시&nbsp;유의사항<br>■&nbsp;1회&nbsp;주문시&nbsp;최대&nbsp;발송&nbsp;가능한&nbsp;수량은&nbsp;1건&nbsp;부터&nbsp;~&nbsp;1,000건&nbsp;까지&nbsp;입니다.<br>■&nbsp;동일한&nbsp;휴대폰번호&nbsp;또는&nbsp;이메일&nbsp;주소&nbsp;발송은&nbsp;ID별&nbsp;최대&nbsp;5개&nbsp;까지만&nbsp;발송&nbsp;가능&nbsp;합니다.<br>■&nbsp;주문&nbsp;일시기준&nbsp;30일&nbsp;이내&nbsp;동일한&nbsp;휴대폰번호&nbsp;또는&nbsp;이메일&nbsp;주소&nbsp;로&nbsp;30회&nbsp;이상&nbsp;발송&nbsp;이력&nbsp;발생시&nbsp;주문&nbsp;불가&nbsp;수신정보&nbsp;리스트에&nbsp;자동&nbsp;등록&nbsp;되어&nbsp;해당&nbsp;수신정보로&nbsp;주문&nbsp;및&nbsp;발송&nbsp;불가&nbsp;합니다.<br>■&nbsp;프로모션(B2B)&nbsp;발송상품으로&nbsp;유효기간&nbsp;연장&nbsp;및&nbsp;환불&nbsp;불가&nbsp;합니다.<br>■&nbsp;시세&nbsp;차익을&nbsp;목적으로&nbsp;사용처에서&nbsp;구매하는&nbsp;경우&nbsp;주문취소&nbsp;및&nbsp;서비스이용이&nbsp;제한될&nbsp;수&nbsp;있습니다.<br><br>▶상품설명&nbsp;<br>-&nbsp;전국&nbsp;CU&nbsp;매장에서&nbsp;상품교환이&nbsp;가능한&nbsp;모바일교환권입니다.&nbsp;(일부매장제외)<br><br>▶유의사항&nbsp;<br>일부&nbsp;특수점포에서는&nbsp;교환권&nbsp;사용이&nbsp;불가&nbsp;할&nbsp;수&nbsp;있습니다.<br>번호이동&nbsp;불가&nbsp;및&nbsp;유효기간&nbsp;만료이후&nbsp;사용이&nbsp;불가합니다.<br>매장&nbsp;내&nbsp;행사(1+1&nbsp;,&nbsp;2+1)&nbsp;증정상품&nbsp;적용&nbsp;가능&nbsp;(단,&nbsp;매장&nbsp;행사기간중에만&nbsp;적용&nbsp;가능)<br>예)&nbsp;증정상품&nbsp;1+1의&nbsp;경우&nbsp;모바일쿠폰&nbsp;1개를&nbsp;결제하면,&nbsp;1+1이&nbsp;적용되어&nbsp;2개&nbsp;상품&nbsp;교환&nbsp;가능<br>예)&nbsp;증정상품&nbsp;2+1의&nbsp;경우&nbsp;모바일쿠폰&nbsp;2개&nbsp;결제하면,&nbsp;2+1이&nbsp;적용&nbsp;되어&nbsp;3개&nbsp;상품&nbsp;교환&nbsp;가능&nbsp;<br>-&nbsp;결제시&nbsp;상품&nbsp;선택&nbsp;후&nbsp;이미지&nbsp;제시&nbsp;바랍니다.<br>-&nbsp;제휴&nbsp;및&nbsp;할인은&nbsp;CU&nbsp;브랜드사&nbsp;정책에&nbsp;따르고&nbsp;있습니다.<br>-&nbsp;현금과&nbsp;교환불가&nbsp;입니다.<br>-&nbsp;바코드인식이&nbsp;안&nbsp;될&nbsp;경우,&nbsp;바코드&nbsp;하단의&nbsp;번호를&nbsp;입력하여&nbsp;결제&nbsp;가능합니다.<br>-&nbsp;해당&nbsp;쿠폰은&nbsp;B2B상품으로&nbsp;유효기간&nbsp;연장&nbsp;및&nbsp;환불이&nbsp;불가합니다.<br><br>☎스마일콘&nbsp;고객센터&nbsp;:&nbsp;1661-8191<br>(영업시간&nbsp;:&nbsp;오전&nbsp;9시&nbsp;30분&nbsp;~&nbsp;18시&lt;주말,공휴일&nbsp;제외&gt;)         </p>"
  }
}

export const archives: ArchiveItemType[] = [
  {
    blockHash: '0xa8255d84b7e10a7c5d7e30176b1df535430d9212633267b9807d93c54303f758',
    randomSeed: '179',
    boxData: myBox,
    openData: myBoxResult
  },
  {
    blockHash: '0xp127wxoxv8exvf9sgry9nacwi5vz60oxq96llkeb4r818jus7d9fhhwbcrmyiiln',
    randomSeed: '036',
    boxData: lotteriaBox,
    openData: lotteriaResult1
  },
  {
    blockHash: '0xmuiatprqx5brzmu3lah730vc4zajnmwzp9q2z7q04bluofcnpmsq3etw70lgqw0o',
    randomSeed: '949',
    boxData: lotteriaBox,
    openData: lotteriaResult2
  },
  {
    blockHash: '0xpwxwr6bxqm1gddq4670j5bekqiq9j9lr8pzwqhliyv98641b0ynjs0xerrfdibt0',
    randomSeed: '920',
    boxData: lotteriaBox,
    openData: lotteriaResult3
  },
  {
    blockHash: '0x9hrtfvl41bf2s3ang5osp2xwfzmz74520lsvq94wv1et2edduzxokymjtkcl460b',
    randomSeed: '561',
    boxData: cuChocoBox,
    openData: cuChocoResult
  },
]