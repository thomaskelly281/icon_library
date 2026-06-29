import { mdiMicroscope } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Microscope(props: IconComponentProps) {
  return <Icon path={mdiMicroscope} {...props} />;
}

export { mdiMicroscope as path };
