import { mdiAngularjs } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Angularjs(props: IconComponentProps) {
  return <Icon path={mdiAngularjs} {...props} />;
}

export { mdiAngularjs as path };
