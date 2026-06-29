import { mdiThermometerLines } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ThermometerLines(props: IconComponentProps) {
  return <Icon path={mdiThermometerLines} {...props} />;
}

export { mdiThermometerLines as path };
