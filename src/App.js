import React, { useState } from 'react';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';

import PdfWithImage from './PdfWithImage';
import RechartGraph from './RechartGraph';

function App() {
  const [image, setImage] = useState(null);
  return (
    <div>
      <RechartGraph handleImage={setImage} />
      {image && (
        <PDFViewer>
          <PdfWithImage image={image} />
        </PDFViewer>
      )}

      {image && (
        <PDFDownloadLink
          document={<PdfWithImage image={image} />}
          fileName="somename.pdf"
        >
          {({ blob, url, loading, error }) =>
            loading ? 'Loading document...' : 'Download now!'
          }
        </PDFDownloadLink>
      )}
    </div>
  );
}

export default App;
