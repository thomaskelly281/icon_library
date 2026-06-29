import { mdiCalculator } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Calculator(props: IconComponentProps) {
  return <Icon path={mdiCalculator} {...props} />;
}

export { mdiCalculator as path };
