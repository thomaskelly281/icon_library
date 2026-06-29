import { mdiHexagonMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HexagonMultiple(props: IconComponentProps) {
  return <Icon path={mdiHexagonMultiple} {...props} />;
}

export { mdiHexagonMultiple as path };
