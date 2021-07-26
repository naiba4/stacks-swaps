import React from 'react';

export function AlertAllPages() {
  return (
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
      <p className="fw-bold">
        <i className="bi bi-exclamation-triangle fs-3"></i> Bitcoin transactions that happen during
        a flash block can't be verified on Stacks chain 2.0.
      </p>
      <p className="fw-bold">
        <i className="bi bi-exclamation-triangle fs-3"></i> Bitcoin transactions that contain more than 8 ins or 8 outs can't be verified on-chain.
      </p>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
}
