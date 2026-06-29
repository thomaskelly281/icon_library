import { mdiReflectVertical } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ReflectVertical(props: IconComponentProps) {
  return <Icon path={mdiReflectVertical} {...props} />;
}

export { mdiReflectVertical as path };
