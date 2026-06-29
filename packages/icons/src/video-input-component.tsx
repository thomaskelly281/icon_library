import { mdiVideoInputComponent } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VideoInputComponent(props: IconComponentProps) {
  return <Icon path={mdiVideoInputComponent} {...props} />;
}

export { mdiVideoInputComponent as path };
