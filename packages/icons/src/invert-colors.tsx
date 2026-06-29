import { mdiInvertColors } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InvertColors(props: IconComponentProps) {
  return <Icon path={mdiInvertColors} {...props} />;
}

export { mdiInvertColors as path };
