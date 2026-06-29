import { mdiRulerSquare } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RulerSquare(props: IconComponentProps) {
  return <Icon path={mdiRulerSquare} {...props} />;
}

export { mdiRulerSquare as path };
