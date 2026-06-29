import { mdiCrane } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Crane(props: IconComponentProps) {
  return <Icon path={mdiCrane} {...props} />;
}

export { mdiCrane as path };
