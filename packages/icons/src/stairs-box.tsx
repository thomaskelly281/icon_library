import { mdiStairsBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StairsBox(props: IconComponentProps) {
  return <Icon path={mdiStairsBox} {...props} />;
}

export { mdiStairsBox as path };
