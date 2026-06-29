import { mdiPierCrane } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PierCrane(props: IconComponentProps) {
  return <Icon path={mdiPierCrane} {...props} />;
}

export { mdiPierCrane as path };
