import { mdiToothbrushElectric } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ToothbrushElectric(props: IconComponentProps) {
  return <Icon path={mdiToothbrushElectric} {...props} />;
}

export { mdiToothbrushElectric as path };
