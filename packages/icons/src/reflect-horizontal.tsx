import { mdiReflectHorizontal } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ReflectHorizontal(props: IconComponentProps) {
  return <Icon path={mdiReflectHorizontal} {...props} />;
}

export { mdiReflectHorizontal as path };
