import { mdiDomeLight } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DomeLight(props: IconComponentProps) {
  return <Icon path={mdiDomeLight} {...props} />;
}

export { mdiDomeLight as path };
