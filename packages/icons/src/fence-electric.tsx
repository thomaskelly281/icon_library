import { mdiFenceElectric } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FenceElectric(props: IconComponentProps) {
  return <Icon path={mdiFenceElectric} {...props} />;
}

export { mdiFenceElectric as path };
