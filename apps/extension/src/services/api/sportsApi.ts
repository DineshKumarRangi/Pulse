import { apiClient } from "./client";
import type {
  ApiFootballResponse,
  ApiFixture,
} from "./footballTypes";

export async function getTodayFixtures() {
  const today = new Date().toISOString().split("T")[0];

  return apiClient<ApiFootballResponse<ApiFixture>>(
    `/fixtures?date=${today}`
  );
}