import { mdiInstrumentTriangle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InstrumentTriangle(props: IconComponentProps) {
  return <Icon path={mdiInstrumentTriangle} {...props} />;
}

export { mdiInstrumentTriangle as path };
