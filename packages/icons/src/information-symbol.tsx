import { mdiInformationSymbol } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function InformationSymbol(props: IconComponentProps) {
  return <Icon path={mdiInformationSymbol} {...props} />;
}

export { mdiInformationSymbol as path };
