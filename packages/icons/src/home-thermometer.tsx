import { mdiHomeThermometer } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HomeThermometer(props: IconComponentProps) {
  return <Icon path={mdiHomeThermometer} {...props} />;
}

export { mdiHomeThermometer as path };
