import {useEffect} from 'react';

export function GoogleAd() {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div style={{overflow: 'hidden', minWidth: '300px', minHeight: '250px'}}>
    <ins
      className="adsbygoogle"
      style={{display: 'block'}}
      data-ad-client="ca-pub-4947463072730532"
      data-ad-slot="5859689937"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
    </div>
  );
}