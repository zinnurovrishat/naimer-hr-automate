
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calculator, TrendingUp, Users, Clock } from 'lucide-react';

const ROICalculator = () => {
  const [employees, setEmployees] = useState(10);
  const [hiringTime, setHiringTime] = useState(30);
  const [hrSalary, setHrSalary] = useState(80000);
  const [turnover, setTurnover] = useState(25);

  // Расчеты экономии
  const currentCosts = {
    hrTime: (hiringTime * hrSalary / 30 / 8) * employees, // стоимость времени HR на найм
    turnoverCost: (employees * turnover / 100) * 200000, // стоимость текучести (средняя замена сотрудника)
    trainingTime: employees * 40 * (hrSalary / 160), // время на обучение новичков
  };

  const totalCurrentCosts = Object.values(currentCosts).reduce((sum, cost) => sum + cost, 0);

  const withAutomation = {
    hrTime: currentCosts.hrTime * 0.3, // экономия 70% времени
    turnoverCost: currentCosts.turnoverCost * 0.6, // снижение текучести на 40%
    trainingTime: currentCosts.trainingTime * 0.4, // ускорение обучения на 60%
  };

  const totalWithAutomation = Object.values(withAutomation).reduce((sum, cost) => sum + cost, 0);
  const yearlyEconomics = (totalCurrentCosts - totalWithAutomation) * 12;
  const automationCost = 700000; // стоимость комплекса
  const roi = ((yearlyEconomics - automationCost) / automationCost) * 100;
  const paybackMonths = automationCost / ((totalCurrentCosts - totalWithAutomation) || 1);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Калькулятор экономии от автоматизации
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Рассчитайте, сколько вы сэкономите на автоматизации найма и обучения 
            в вашей компании
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Calculator Inputs */}
          <Card className="p-8">
            <div className="flex items-center mb-6">
              <Calculator className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Параметры вашей компании</h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Количество сотрудников для найма в год
                </label>
                <input
                  type="range"
                  min="5"
                  max="100"
                  value={employees}
                  onChange={(e) => setEmployees(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>5</span>
                  <span className="font-bold text-primary">{employees}</span>
                  <span>100</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Среднее время поиска одного кандидата (дни)
                </label>
                <input
                  type="range"
                  min="10"
                  max="60"
                  value={hiringTime}
                  onChange={(e) => setHiringTime(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>10</span>
                  <span className="font-bold text-primary">{hiringTime}</span>
                  <span>60</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Зарплата HR-менеджера в месяц (₽)
                </label>
                <input
                  type="range"
                  min="50000"
                  max="150000"
                  step="10000"
                  value={hrSalary}
                  onChange={(e) => setHrSalary(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>50k</span>
                  <span className="font-bold text-primary">{hrSalary.toLocaleString()}₽</span>
                  <span>150k</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Текучесть персонала (%)
                </label>
                <input
                  type="range"
                  min="10"
                  max="50"
                  value={turnover}
                  onChange={(e) => setTurnover(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>10%</span>
                  <span className="font-bold text-primary">{turnover}%</span>
                  <span>50%</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Results */}
          <Card className="p-8 bg-gradient-to-br from-white to-primary/5">
            <div className="flex items-center mb-6">
              <TrendingUp className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Результаты расчета</h3>
            </div>

            <div className="space-y-6">
              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">
                    {yearlyEconomics.toLocaleString()}₽
                  </div>
                  <div className="text-sm text-gray-600">экономия в год</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-primary">
                    {Math.round(paybackMonths)} мес
                  </div>
                  <div className="text-sm text-gray-600">окупаемость</div>
                </div>
              </div>

              {/* ROI */}
              <div className="bg-primary rounded-lg p-6 text-white text-center">
                <div className="text-3xl font-bold mb-2">
                  {roi > 0 ? '+' : ''}{Math.round(roi)}%
                </div>
                <div className="text-primary-foreground/80">ROI за первый год</div>
              </div>

              {/* Breakdown */}
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Источники экономии:</h4>
                
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-primary mr-2" />
                    <span className="text-sm">Время HR на найм</span>
                  </div>
                  <span className="font-bold text-green-600">
                    -{Math.round((currentCosts.hrTime - withAutomation.hrTime) * 12).toLocaleString()}₽
                  </span>
                </div>

                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 text-primary mr-2" />
                    <span className="text-sm">Снижение текучести</span>
                  </div>
                  <span className="font-bold text-green-600">
                    -{Math.round((currentCosts.turnoverCost - withAutomation.turnoverCost) * 12).toLocaleString()}₽
                  </span>
                </div>

                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 text-primary mr-2" />
                    <span className="text-sm">Ускорение обучения</span>
                  </div>
                  <span className="font-bold text-green-600">
                    -{Math.round((currentCosts.trainingTime - withAutomation.trainingTime) * 12).toLocaleString()}₽
                  </span>
                </div>
              </div>

              {/* CTA */}
              <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                Получить персональный расчет
              </Button>
            </div>
          </Card>
        </div>

        <div className="mt-12 text-center text-gray-600">
          <p className="text-sm">
            * Расчеты приблизительные и могут отличаться в зависимости от специфики вашего бизнеса
          </p>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
