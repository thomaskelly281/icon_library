import { mdiVideoInputScart } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VideoInputScart(props: IconComponentProps) {
  return <Icon path={mdiVideoInputScart} {...props} />;
}

export { mdiVideoInputScart as path };
