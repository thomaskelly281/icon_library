import { mdiNodejs } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Nodejs(props: IconComponentProps) {
  return <Icon path={mdiNodejs} {...props} />;
}

export { mdiNodejs as path };
