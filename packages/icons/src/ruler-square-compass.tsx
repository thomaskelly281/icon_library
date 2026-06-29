import { mdiRulerSquareCompass } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RulerSquareCompass(props: IconComponentProps) {
  return <Icon path={mdiRulerSquareCompass} {...props} />;
}

export { mdiRulerSquareCompass as path };
