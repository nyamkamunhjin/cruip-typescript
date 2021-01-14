import React from 'react';
import classNames from 'classnames';

interface IData {
  title: string;
  paragraph: string;
}

interface Props {
  className?: string;
  data: IData;
  width?: number;
  height?: number;
  children?: React.ReactNode;
  tag?: 'h1' | 'h2' | 'h3';
}
// const defaultProps = {
//   children: null,
//   tag: 'h2',
// };

const SectionHeader: React.FC<Props> = ({
  className,
  data,
  children = null,
  tag = 'h2',
  ...props
}) => {
  // const { className, data, children, tag, ...props } = this.props;
  const classes = classNames('section-header', className);
  const Component = tag;
  return (
    <React.Fragment>
      {(data.title || data.paragraph) && (
        <div {...props} className={classes}>
          <div className="container-xs">
            {children}
            {data.title && (
              <Component
                className={classNames(
                  'mt-0',
                  data.paragraph ? 'mb-16' : 'mb-0'
                )}
              >
                {data.title}
              </Component>
            )}
            {data.paragraph && <p className="m-0">{data.paragraph}</p>}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
// SectionHeader.defaultProps = defaultProps;
export default SectionHeader;
