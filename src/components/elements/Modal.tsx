import React, { useEffect } from 'react';
import classNames from 'classnames';
interface Props {
  className?: string;
  id?: string;
  children?: React.ReactNode;
  handleClose: (event: React.MouseEvent<any>) => void;
  show: boolean;
  closeHidden?: boolean;
  video?: string;
  videoTag?: 'iframe' | 'video';
  // props: any;
}

// const defaultProps = {
//   children: null,
//   show: false,
//   closeHidden: false,
//   video: '',
//   videoTag: 'iframe'
// };

const Modal: React.FC<Props> = ({
  className,
  id,
  handleClose,
  children = null,
  show = false,
  closeHidden = false,
  video = '',
  videoTag = 'iframe',
  ...props
}) => {
  useEffect(() => {
    // document.addEventListener('keydown', keyPress);
    document.addEventListener('click', stopProgagation);
    return () => {
      // document.removeEventListener('keydown', keyPress);
      document.removeEventListener('click', stopProgagation);
    };
  }, []);

  useEffect(() => {
    handleBodyClass();
  }, [show]);

  const handleBodyClass = () => {
    if (document.querySelectorAll('.modal.is-active').length) {
      document.body.classList.add('modal-is-active');
    } else {
      document.body.classList.remove('modal-is-active');
    }
  };

  // const keyPress = (event: KeyboardEvent | React.MouseEvent<any>): any => {
  //   event.keyCode === 27 && handleClose(event);
  // };

  const stopProgagation = (e: Event): any => {
    e.stopPropagation();
  };

  const classes = classNames(
    'modal',
    show && 'is-active',
    video && 'modal-video',
    className
  );

  return (
    <React.Fragment>
      {show && (
        <div {...props} className={classes} onClick={handleClose}>
          <div
            className="modal-inner"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {video ? (
              <div className="responsive-video">
                {videoTag === 'iframe' ? (
                  <iframe
                    title="video"
                    src={video}
                    frameBorder="0"
                    allowFullScreen
                  />
                ) : (
                  <video v-else controls src={video} />
                )}
              </div>
            ) : (
              <React.Fragment>
                {!closeHidden && (
                  <button
                    className="modal-close"
                    aria-label="close"
                    onClick={handleClose}
                  />
                )}
                <div className="modal-content">{children}</div>
              </React.Fragment>
            )}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
// Modal.defaultProps = defaultProps;
export default Modal;
