import { mdiVectorEllipse } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VectorEllipse(props: IconComponentProps) {
  return <Icon path={mdiVectorEllipse} {...props} />;
}

export { mdiVectorEllipse as path };
