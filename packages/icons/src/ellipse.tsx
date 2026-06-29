import { mdiEllipse } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Ellipse(props: IconComponentProps) {
  return <Icon path={mdiEllipse} {...props} />;
}

export { mdiEllipse as path };
